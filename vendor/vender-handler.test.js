'use strict';

//imports socket
let socket = require('../socket-client-for-tests-only');

const { orderHandler, thankDriver } = require('./handler');

//mocks the socket test only returning an object w/ implemations for 'on' and 'emit methods
jest.mock('../socket-client-for-tests-only.js', () => {
  return {
    on: jest.fn(),
    emit: jest.fn(),
  };
});
//hold reference to spy on console
let consoleSpy;
//sets just jest 'beforeAll' hook executed before running
beforeAll(() => {
  consoleSpy = jest.spyOn(console, 'log').mockImplementation();
});
//sets up jest for 'afterAll' hook to be executed after all test have ran
afterAll(() => {
  consoleSpy.mockRestore();
});

describe('Vendor handlers', () => {

  test('Should log correct emit and console log for orderHandler', () => {
    let payload = {
      orderId: 12345,
    };

    orderHandler(socket, payload);

    test('Should log correct emit and console log for thankDriver', () => {
      let payload = {
        customer: 'Test Test',
      };
      expect(consoleSpy).toHaveBeenCalledWith('VENDOR: ORDER ready for pickup:', payload);
      expect(socket.emit).toHaveBeenCalledWith('pickup', payload);
    });

    thankDriver(payload);
    test('Should log correct emit and console log for thankDriver', () => {
      let payload = {
        customer: 'Test Test',
      };

      expect(consoleSpy).toHaveBeenCalledWith('VENDOR: Thank you for your order', payload.customer);
    });
    thankDriver(payload);


    expect(consoleSpy).toHaveBeenCalledWith('VENDOR: Thank you for your order', payload.customer);
  });

});
