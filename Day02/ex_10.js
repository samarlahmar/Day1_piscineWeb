function CountHamSandwich (breadCount, hamCount) {
    nb = 0 ;
    while((breadCount>=2) && (hamCount>0)){
    breadCount-=2 ;
    hamCount-=1;
    nb += 1;
    }
    return [nb,breadCount,hamCount] ;
    }
    
function CountTunaSandwich (breadCount, tunaCount,saladCount) {
    nb = 0 ;
    while((breadCount>=2) && (tunaCount>0) && (saladCount>=2)){
    breadCount-=2 ;
    saladCount-=2;
    tunaCount-=1;
    nb += 1;
    }
    return [nb,breadCount,saladCount,tunaCount] ;
    }
function CountVegSandwich (breadCount,saladCount,tomatoCount) {
    nb = 0 ;
    while((breadCount>=2) && (saladCount>0) && (tomatoCount>=2)){
    breadCount-=2 ;
    tomatoCount-=2;
    saladCount-=1;
    nb += 1;
    }
    return [nb,breadCount,saladCount,tomatoCount] ;
    }
var result_step1 = CountHamSandwich(breadCount,hamCount);
breadCount = result_step1[1] ;
hamCount = result_step1[2] ;
var result_step2 = CountTunaSandwich(breadCount,tunaCount,saladCount);
breadCount = result_step2[1] ;
saladCount = result_step2[2] ;
tunaCount= result_step2[3]
var result_step3 = CountTunaSandwich(breadCount,saladCount,tomatoCount);
breadCount = result_step3[1] ;
saladCount = result_step3[2] ;
tomatoCount= result_step3[3]
displayThisText('the number of ham sandwich(es) :' +" "+result_step1[0]);
displayThisText('the number of tuna sandwich(es) :' +" "+result_step2[0]);
displayThisText('the number of vegetarian sandwich(es) :' +" "+result_step3[0]);
displayIngredients();