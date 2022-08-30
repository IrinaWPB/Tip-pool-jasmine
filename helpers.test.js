describe("Calculating total payments", function() {

  beforeEach( function() {

    billAmtInput.value = 100;
    tipAmtInput.value = 10;
    submitPaymentInfo();

  });
  
  it('should calculate total payments', function() {
    billAmtInput.value = 200;
    tipAmtInput.value = 30;
    submitPaymentInfo();
    expect(sumPaymentTotal('billAmt')).toBe(300);  
  });

  it('should calculate total tips', function() {
    billAmtInput.value = 300;
    tipAmtInput.value = 35;
    submitPaymentInfo();
    expect(sumPaymentTotal('tipAmt')).toBe(45);    
  });

  it('should add new element to the table', function() {
    
    let newElement = document.createElement('tr');
    let test = 'New Element';
    appendTd(newElement, test);
    expect(newElement.innerText).toBe(test);
  });

  afterEach(function() {
    
    billAmtInput.value = '';
    tipAmtInput.value = '';

    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    allPayments = {};
    paymentId = 0;

  });
});

it('should calculate tip percent', function() {

  expect(calculateTipPercent(100, 10)).toBe(10);
  expect(calculateTipPercent(100, 0)).toBe(0);
  expect(calculateTipPercent(200, 40)).toBe(20);
});


