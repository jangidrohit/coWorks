import React from 'react'
import { mount, configure } from 'enzyme'
import HelloWorld from './testFile'
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import expect from 'expect';
import mocha from 'mocha';
configure({ adapter: new Adapter() });


describe('HelloWorld', function(){
  
  it('it should have tests', function(){
    var data = new HelloWorld();
    data.pushValue(1);
    data.pushValue(4);
    data.pushValue(2);
    data.pushValue(3);
    data.pushValue(6);
    expect(data.getMedian()).toEqual('3');
   });

    it('it should have tests', function(){
    var data = new HelloWorld();
    data.pushValue(1);
    data.pushValue(4);
    data.pushValue(2);
    data.pushValue(3);
    data.pushValue(6);
    expect(data.getMedian()).toEqual('3');
   });
  it('it should have tests', function(){
    var data = new HelloWorld();
    data.pushValue(6);
    data.pushValue(6);
    data.pushValue(6);
    data.pushValue(6);
    data.pushValue(6);
    expect(data.getMedian()).toEqual('6');
  });
  it('it should have tests', function(){
    var data = new HelloWorld();
    data.pushValue(6);
    data.pushValue(5);
    data.pushValue(4);
    data.pushValue(4);
    data.pushValue(4);
    data.pushValue(4);
    expect(data.getMedian()).toEqual('4');
  });
  it('it should have tests', function(){
    var data = new HelloWorld();
    data.pushValue(19000);
    data.pushValue(190000);
    data.pushValue(190000);
    data.pushValue(200000);
    data.pushValue(30000);
    data.pushValue(80000);
    expect(data.getMedian()).toEqual('19000');
  });
  it('it should have tests', function(){
    var data = new HelloWorld();
    data.pushValue(-19000);
    data.pushValue(1900);
    expect(data.getMedian()).toEqual('1900');
  });
  it('it should have tests', function(){
    var data = new HelloWorld();
    for(var val = 1;val<20000;val++){
    	data.pushValue(val);
    }
    expect(data.getMedian()).toEqual('18999');
  });
  
  it('it should have tests', function(){
    var data = new HelloWorld();
    for(var val = 1;val<20000;val++){
    	data.pushValue(100);
    }
   	expect(data.getMedian()).toEqual('100');
  });
  
  it('it should have tests', function(){
    var data = new HelloWorld();
    data.pushValue(1000);
    expect(data.getMedian()).toEqual('1000');
  });
})
