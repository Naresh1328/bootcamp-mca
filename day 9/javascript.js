  const con = document.getElementById('container');
  const com = document.getElementById('mini');

  const arr = [
     'assets/img1.jpg',
     'assets/img2.jpg',
     'assets/img3.jpg',
     'assets/img4.jpg',
     'assets/img5.jpg',
     'assets/img6.jpg'
  ];

  const mini = [
    'assets/img1.jpg',
    'assets/img2.jpg',
    'assets/img3.jpg',      
    'assets/img4.jpg',
    'assets/img5.jpg',
    'assets/img6.jpg'
  ]
  
  let i=0;
  let changeimg = () => {
    i++;
    if(i==arr.length)
    {
      i=0;
    }   
    
    con.style.backgroundImage = `url('${arr[i]}')`;

  
  }
    let j=arr.length-1;
  let changebackimg = () => {
    if(j==-1)
    {
      j=arr.length-1;
    }
    
    con.style.backgroundImage = `url('${arr[j]}')`;

  j--;
  }
  setInterval(() => {
    changeimg();    
  }, interval = 5000);


let k =0;
let changemini = () => {
  k++;
  if(k==mini.length)
  {
    k=0;
  }
  con.style.backgroundImage = `url('${mini[k]}')`;
}


 setInterval(() => {
    changemini();    
  }, interval = 5000);