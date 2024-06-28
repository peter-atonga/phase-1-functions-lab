let hq=42;

function distanceFromHqInBlocks(pickUpLocation) {
    //returns the number of blocks given a value
    if(pickUpLocation>hq){
        return pickUpLocation-hq;
    }else{
        return hq -pickUpLocation;
    }
  }

  function distanceFromHqInFeet(pickUpLocation) {
    return distanceFromHqInBlocks(pickUpLocation) * 264;

    
  }

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if(start>destination){
        return (start-destination)*264;
    }else{
        return (destination-start)*264;
    }
  }
 
  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    if(distanceTravelledInFeet(start,destination)<400){
        return 0;
    }else if(distanceTravelledInFeet(start,destination)>400 && distanceTravelledInFeet(start,destination)<2000){
        return (distanceTravelledInFeet(start,destination)-400)*0.02;
    }else if(distanceTravelledInFeet(start,destination)>2000,distanceTravelledInFeet(start,destination)<2500){
        return 25;
    }else if (distanceTravelledInFeet(start,destination)>2500){
        return 'cannot travel that far';
    }
  }