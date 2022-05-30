/** Display year is kabisat and display month */

function getDays(month,year){
    if(isNaN(month) && isNaN(year)){
        return 'inputan bulan & tahun harus dalam integer'
    }else if(isNaN(month)){
        return 'inputan bulan harus dalam integer'
    }else if(isNaN(year)){
        return 'inputan tahun harus dalam integer'
    }else{
        if(year % 4 === 0){
            switch(month){
                case 1: 
                    return  'This month has 31 days,' +year+ ' adalah tahun kabisat';
                    break;
                case 2: 
                    return  'This month has 29 days,' +year+ ' adalah tahun kabisat';
                    break;
                case 3: 
                    return  'This month has 31 days, ' +year+ ' adalah tahun kabisat';
                    break;
                case 4: 
                    return  'This month has 30 days, ' +year+ ' adalah tahun kabisat';
                    break;
                case 5: 
                    return  'This month has 31 days, ' +year+ ' adalah tahun kabisat';
                    break;
                case 6: 
                    return  'This month has 30 days, ' +year+ ' adalah tahun kabisat';
                    break;
                case 7: 
                    return  'This month has 31 days, ' +year+ ' adalah tahun kabisat';
                    break;
                case 8: 
                    return  'This month has 31 days, ' +year+ ' adalah tahun kabisat';
                    break;
                case 9: 
                    return  'This month has 30 days, ' +year+ ' adalah tahun kabisat';
                    break;
                case 10: 
                    return  'This month has 31 days, ' +year+ ' adalah tahun kabisat';
                    break;
                case 11: 
                    return  'This month has 30 days, ' +year+ ' adalah tahun kabisat';
                    break;
                case 12: 
                    return  'This month has 31 days, ' +year+ ' adalah tahun kabisat';
                    break;
                
        
            }
        }else{
            switch(month){
                case 1: 
                    return  'This month has 31 hari';
                    break;
                case 2: 
                    return  'This month has 28 hari';
                    break;
                case 3: 
                    return  'This month has 31 hari';
                    break;
                case 4: 
                    return  'This month has 30 hari';
                    break;
                case 5: 
                    return  'This month has 31 hari';
                    break;
                case 6: 
                    return  'This month has 30 hari';
                    break;
                case 7: 
                    return  'This month has 31 hari';
                    break;
                case 8: 
                    return  'This month has 31 hari';
                    break;
                case 9: 
                    return  'This month has 30 hari';
                    break;
                case 10: 
                    return  'This month has 31 hari';
                    break;
                case 11: 
                    return  'This month has 30 hari';
                    break;
                case 12: 
                    return  'This month has 31 hari';
                    break;
                
        
            }

        }
    }
    
}

console.log(getDays("a",2021)); //inputan bulan harus dalam integer
console.log(getDays("2","year")); //inputan tahun harus dalam integer
console.log(getDays("m","year"));//inputan bulan & tahun harus dalam integer
console.log(getDays(1,2000)); //This month has 29 days, 2000 adalah tahun kabisat
console.log(getDays(8,2021)); //This month has 31 hari