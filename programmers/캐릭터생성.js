function solution(n, record) {
    var answer = [];
    
    let cha_num = new Array(9);
    cha_num.fill(5,0,9);
    
    
    var ary = record.map((x)=>{
        let k = x.split(' ');
        return {'server':k[0], 'name':k[1]} 
    });

    
    let server = [];
    for(let i=0; i<n;i++){
        server[i] = new Array({'server':0, 'name':'', 'index':''});
    }
    
    //console.log(server[ary[2].server-1][0].server);
    
    let count = 0;
    
    for(let i = 0; i<ary.length; i++){
        if(server[ary[i].server-1].findIndex(k=> k.name==ary[i].name && k.server==ary[i].server)>=0){
            //console.log("duplicate ", ary[i]);
            continue;
        }
        else if(cha_num[ary[i].server]>0) cha_num[ary[i].server]--;
        else{
             server[ary[i].server-1].shift()
            //console.log('shift : ', server[ary[i].server-1].shift());
            if(cha_num[ary[i].server]>0)cha_num[ary[i].server]++;
        }
        //console.log(ary[i], server[ary[i].server-1].findIndex(k=> k.name==ary[i].name && k.server==ary[i].server), cha_num[ary[i].server]);
        if(server[ary[i].server-1][0].server==0) server[ary[i].server-1].pop();
        server[ary[i].server-1].push({'server':ary[i].server, 'name':ary[i].name, 'index':count});
        count++;
    }
    
    for(let i = 0; i<n; i++){
        if(server[i][0].server==0) continue;
        else{
            server[i].sort((a,b)=>{
                if(a.serber===b.server) return a.index-b.index;
                return a.server-b.server;
            });
        }
        
    }
    
    
    
    
    for(let i = 0; i<n; i++){
        if(server[i][0].server==0) continue;
        else{
            for(let j = 0; j<server[i].length; j++){
                answer.push(server[i][j].name);
            }
        }
        
    }


    
    return answer;
}