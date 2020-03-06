const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  });
  it('arithmetical operations should update the display with the result of the operation', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
  });
  it('should allow for multiple operations to be chained together', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('14')
  });
  it('should handle positive results', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('5')
  });
  it('should handle negative results', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('-2')
  });
  it('should handle decimal results', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('1.5')
  });
  it('should handle very large number results', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number3')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('6000000000000')
  });
  it('should handle scenario when divisor is zero', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('You cannot divide by zero!')
  });


});
