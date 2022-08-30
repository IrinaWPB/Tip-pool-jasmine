describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
    submitServerInfo();
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('shoud update server table', function(){

    updateServerTable();

    let serverDataRow = document.querySelector('.new_server');
    let serverCell = serverDataRow.querySelector('td');
    let paymentCell = serverCell.nextElementSibling;

    expect(serverCell.innerText).toBe('Alice');
    expect(paymentCell.innerText).toBe('$0.00');

  });

  afterEach(function() {
    serverTbody.innerHTML = '';
    allServers = {};
  });
});
