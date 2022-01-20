Vue.component('hello-world',{
    template: `  
        <div>
            <h1>Hello World 01and {{ message }}</h1>   
        </div>
        `,
    props: ['message']
});


Vue.component('hello-world2',{
    template: `  
        <div>
            <h1>2Hello World and {{ message }}</h1>   
        </div>
        `,
    props: ['message']
});

Vue.component('hello-world3',{
    template: `  
        <div>
            <h1>3Hello World and {{ message }}</h1>   
            <h1>aaaaaaaaa and {{ message }}</h1>
            <h1>4Hello World and {{ message }}</h1>
        </div>
        `,
    props: ['message']
});

