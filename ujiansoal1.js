var nilai1;
var nilai2;
var fpb = (nilai1,nilai2) => { 
    for(fpb=1;fpb<=nilai1;fpb++){
        var x =nilai1%fpb;
        var y =nilai2%fpb;

    if(x==y && y==0) {niliafpb = fpb;}

    var kpk = (nilai1*nilai2)/niliafpb;
}  
    console.log('FPB dari ' +nilai1+' & '+nilai2+' = ' +niliafpb)
    console.log('KPK dari '+nilai2+' & '+nilai1+' = ' +kpk)
}
fpb(3,2);