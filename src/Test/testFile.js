import React from 'react';


class Statscollector extends React.Component { 
  	constructor() {
  		super()
		this.state = {
			slotToCountMap : {},
			count : 0,
			time : 0
		}
  	}

	pushValue(responseTimeMs){
  	if(responseTimeMs < 0) return;
	    var upperSlot = 19000;
	    var slot = responseTimeMs;
	    if(responseTimeMs >= upperSlot){
	    	slot = upperSlot;
	    }
	    var freq = this.state.slotToCountMap[slot];
	    if(freq != undefined) {
	    		this.state.slotToCountMap[slot] = freq + 1;
	    }else{
	    	this.state.slotToCountMap[slot] = 1;
	    }  
	   	this.state.count = this.state.count + 1;
	    this.state.time = this.state.time + responseTimeMs; 
	  }

	getMedian(){
    //Sort the keys, before using it.
    var keys = [];
    for(var key in this.state.slotToCountMap){
    	keys.push(key);
    }
    keys.sort();
    
    var mid = Math.ceil(this.state.count/2);
    var midleft = -1; //Since timemillisec [0,19000]
    var temp = 0;
    for(var index = 0;index<keys.length;index++){
		  if((temp + this.state.slotToCountMap[keys[index]]) < mid){
	     		temp = temp + this.state.slotToCountMap[keys[index]];
	      }else if(((temp + this.state.slotToCountMap[keys[index]]) > mid) && this.state.count %2 ==0){
	      		if(midleft == -1){
	          		return keys[index];
	          }else{
	          	return (keys[index]/2 + midleft/2);
	          }
	      } else{
	      	if((temp + this.state.slotToCountMap[keys[index]]) == mid && this.state.count %2 ==0){
	         	temp = temp + this.state.slotToCountMap[keys[index]];
	        	midleft = keys[index];
	        }else if((temp + this.state.slotToCountMap[keys[index]]) == mid && this.state.count %2 !=0){
	        	return keys[index];
	        }else{
	        	return keys[index];
	        }
	      }
	    }
 	}  
	getAverage(){
  		return this.state.time/this.state.count;
  	}

  	render(){
  		return(
			<div id="test"></div>
  		)
  	}
}

export default Statscollector;

