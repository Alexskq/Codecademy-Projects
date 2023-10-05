const getSleepHours = day => {

    switch(day){
      case 'monday':
        return 8
        break;
      case 'tuesday':
        return 8
        break
      case 'wednesday':
        return 8
        break
      case 'thursday':
        return 8
        break
      case 'friday':
        return 6
        break
      case 'saturday':
        return 6
        break
      case 'sunday':
        return 6
        break
      default:
        return 'ooops error'
        break
    }
  }
  
  const getActualSleepHours = () =>
  // first way to do that
   /*getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');*/

   
   // extra pratice : 
   8+8+8+8+6+6+6
  
  // first way
    /*const getIdealSleepHours = () => {
      const idealHours = 8;
      return idealHours * 7;
    }*/
  
    // refacto 
  
    const getIdealSleepHours = idealHours => idealHours * 7
  
  
  // avec le refacto, on passe le nombre ideal d'heure en paramètre de la fonction getIdealSleepHours(8);
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(7);
  
    if (actualSleepHours === idealSleepHours){
      return `You got ${actualSleepHours} hours the perfect amount of sleep`
    }else if (actualSleepHours > idealSleepHours){
      return `You got ${actualSleepHours - idealSleepHours} hours more sleep than needed`
    }else {
      return `You got ${actualSleepHours - idealSleepHours}should get some rest`
  }
  
  }
  
  console.log(calculateSleepDebt())
  
    