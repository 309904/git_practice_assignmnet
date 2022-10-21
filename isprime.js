for(let n=1;n<=50;n++)
  {
    let count=0;
    for(let j=1; j<=n; j++)
    {
        if(n%j=0)
        {
          count++;
        }
    }
    if(count=2)
    {
      console.log(n, " is Prime");
    }
    else
    {
      console.log(n, " is not Prime");
    }
  }
