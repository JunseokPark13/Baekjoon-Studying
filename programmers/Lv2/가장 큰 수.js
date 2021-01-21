
function solution(numbers) {
    var answer = '';
    numbers = numbers.map(x => x+'');

    numbers.sort((a,b)=>{
        return (b+a)-(a+b);
    });
    console.log(numbers);
    
    answer = numbers.reduce((acc, val)=>{
        return acc+val;
    })
    
    var check = true;
    for(var i in numbers){
        if(numbers[i]==='0' && check) {
            continue;
        }
        else{
            check=false;
            break;
        }
    }
    
    if(check) answer = '0';
      
    return answer;
}