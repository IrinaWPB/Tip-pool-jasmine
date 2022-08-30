describe("Payment tests", function() {
    beforeEach(function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
    });
  
    it('should craete new payment object', function () {
        const testObj = {
            billAmt: '100',
            tipAmt: '20',
            tipPercent: 20
        };

        expect(createCurPayment()).toEqual(testObj);    
    });

    it('should add a payment to a payment table', function() {
        let currentPaymentObj  = createCurPayment();
        appendPaymentTable(currentPaymentObj);
        let paymentCell = paymentTbody.querySelectorAll('td');

        expect(paymentCell[0].innerHTML).toEqual('$100');
        expect(paymentCell[1].innerHTML).toEqual('$20');
        expect(paymentCell[2].innerHTML).toEqual('20%');
    });

    it('should update summary table', function() {
        submitPaymentInfo();
        expect(summaryTds[0].innerHTML).toBe('$100');
        expect(summaryTds[1].innerHTML).toBe('$20');
        expect(summaryTds[2].innerHTML).toBe('20%');

        billAmtInput.value = 540;
        tipAmtInput.value = 76;
        submitPaymentInfo();
        expect(summaryTds[0].innerHTML).toBe('$640');
        expect(summaryTds[1].innerHTML).toBe('$96');
        expect(summaryTds[2].innerHTML).toBe('15%');
        
        allPayments = {};
    });

    
    describe('Calculating average tip and average tip percent', function() {
        beforeEach(function() {
          submitPaymentInfo();
          billAmtInput.value = 300;
          tipAmtInput.value = 40;
          submitPaymentInfo();
        });

        it('should calculate tip avarage', function() {
            let tipAvg = sumPaymentTotal('tipAmt')/Object.keys(allPayments).length;
            expect(tipAvg).toBe(30);    
        });

        it('should calculate tipPercent average', function() {
            let tipPercentAvg = Math.round(sumPaymentTotal('tipAmt')/sumPaymentTotal('billAmt')* 100);
            expect(tipPercentAvg).toBe(15);
        });
        afterEach(function() {
            billAmtInput.value = '';
            tipAmtInput.value = '';
            allPayments = {};
            paymentId = 0;
            let summaryData = document.querySelectorAll('td');
            for (let i = 0; i < summaryData.length; i++) {
                summaryData[i].remove();
            }
        });
    }); 
});    