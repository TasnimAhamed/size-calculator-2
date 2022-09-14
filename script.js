const height=document.getElementById('height--slider'),
        heightText=document.getElementById('height--text'),
        weight=document.getElementById('weight--slider'),
        weightText=document.getElementById('weight--text'),
        size=document.getElementById('size'),
        findMySize=document.getElementById('find-my-size'),
        perferenceSize=document.getElementById('preference--size')


height.addEventListener('input', function(e) {
    //console.log(e.target.value);
    heightText.innerHTML = e.target.value
    const weightValue=document.getElementById('weight--slider').value
    perferenceSize.classList.contains('show') && calculateSize(e.target.value, weightValue);
})

weight.addEventListener('input', function(e) {
    //console.log(e.target.value);
    weightText.innerHTML = e.target.value
    const heightValue=document.getElementById('height--slider').value
    perferenceSize.classList.contains('show') && calculateSize(heightValue,e.target.value);
})

findMySize.addEventListener('click',function(){
    const heightValue=document.getElementById('height--slider').value
    const weightValue=document.getElementById('weight--slider').value
    calculateSize(heightValue,weightValue);
})



function calculateSize(height, weight){
    !perferenceSize.classList.contains('show') && perferenceSize.classList.remove('hide')
    !perferenceSize.classList.contains('show') && perferenceSize.classList.add('show')

    if((height >= 162 && height <= 168) && (weight >=46 && weight <=56)){
        size.classList.contains('sorry') && size.classList.remove('sorry');
        size.innerHTML="M"
    }
    else if((height >= 165 && height <= 177) && (weight >=56 && weight <=65)){
        size.classList.contains('sorry') && size.classList.remove('sorry');
        size.innerHTML="L"
    }
    else if((height >= 167 && height <= 178) && (weight >=65 && weight <=70)){
        size.classList.contains('sorry') && size.classList.remove('sorry');
        size.innerHTML="XL"
    }
    else if((height >= 169 && height <= 185) && (weight >=70 && weight <=75)){
        size.classList.contains('sorry') && size.classList.remove('sorry');
        size.innerHTML="2XL"
    }
    else if((height >= 172 && height <= 188) && (weight >=75 && weight <=80)){
        size.classList.contains('sorry') && size.classList.remove('sorry');
        size.innerHTML="3XL"
    }
    else if((height >= 170 && height <= 190) && (weight >=80 && weight <=85)){
        size.classList.contains('sorry') && size.classList.remove('sorry');
        size.innerHTML="4XL"
    }
    else if((height >= 175 && height <= 192) && (weight >=85 && weight <=90)){
        size.classList.contains('sorry') && size.classList.remove('sorry');
        size.innerHTML="5XL"
    }
    else{
        size.classList.add('sorry');
        size.innerHTML="We're sorry, we can't provide a size recommendation for this item."
    }
}