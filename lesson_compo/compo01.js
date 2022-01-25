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
            <p><b-button @click="increment">カウントアップ</b-button>　{{count}}</p>    
        </div>
        `,
    props: ['message'],
    data(){
        return{
            count:0
        }
    },
    methods:{
        increment(){
            this.count += 1
        }
    }
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

Vue.component('sc-menu',{
    template: `  
    <div>
    <b-button v-b-toggle.sidebar-no-header>メニュー</b-button>
    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
        <template #default="{ hide }">
            <div class="p-3">
                <h4 id="sidebar-no-header-title" style="float: left; width: 75%;">遷移メニュー</h4>
                <b-button variant="danger" block @click="hide" style="float: right; width: 15%;">✖
                </b-button>
                <b-img src="https://free-materials.com/adm/wp-content/uploads/2020/10/logo_07-1024x1024.png"
                    style="width: 100%; height: 50px; margin: 10px 0px;"></b-img>
                <nav class="mt-3">
                    <b-nav vertical class="mb-4">
                        <b-button variant="info" block href="/home-page"><i class="fas fa-home"></i>　TOP
                        </b-button>
                    </b-nav>
                    <b-nav vertical>
                        <b-button variant="primary" block href="/customer-page"><i
                                class="fas fa-building"></i>　得意先
                        </b-button>
                        <b-button variant="primary" block href="/item-page"><i class="fas fa-box"></i>　商　品
                        </b-button>
                        <b-button variant="primary" block href="/invoice-page"><i
                                class="fas fa-copy"></i>　請求書</b-button>
                        <b-button variant="primary" block href="/quotation-page"><i
                                class="far fa-copy"></i>　見積書</b-button>
                        <b-button variant="primary" block href="/memo-page"><i
                                class="fas fa-book-open"></i>　メ　モ</b-button>
                    </b-nav>
                </nav>
            </div>
        </template>
    </b-sidebar>
    </div>
    `,
    props: []
});

Vue.component('sc-select-customer',{
    template: `
    <div>  
        <p>顧客を選択してください</p>
        <b-table hover striped small sort-by="ID" id="customer-table" :items="customers" @row-clicked="row"
        label="Table Options" :fields="[
                {  key: 'id', label: 'No.' },
                {  key: 'kokyaku', label: '顧客名' },
                {  key: 'postNum',   label: '郵便番号' },
                {  key: 'address',  label: '住所' },
                {  key: 'telno',  label: '電話番号' },
                {  key: 'daihyou', label: '代表者名' },
                {  key: 'memo', label: 'メモ' },
            ]"></b-table>
    </div>
    `,
    props: [],
    data(){
        return {
            customers: [
                { id: 1, kokyaku: '○○株式会社', postNum: '000-0000', address: '栃木県鹿沼市板荷0000-00', telno: '000-0000-0000', daihyou: '代表者名', memo: 'これはお客さんのメモです' },
                { id: 2, kokyaku: '○○有限会社', postNum: '000-0000', address: '栃木県鹿沼市板荷0000-00', telno: '000-0000-0000', daihyou: '代表者名', memo: 'これはお客さんのメモです' },
                { id: 3, kokyaku: '○○商事', postNum: '000-0000', address: '栃木県鹿沼市板荷0000-00', telno: '000-0000-0000', daihyou: '代表者名', memo: 'これはお客さんのメモです' },
                { id: 4, kokyaku: '○○鉄工所', postNum: '000-0000', address: '栃木県鹿沼市板荷0000-00', telno: '000-0000-0000', daihyou: '代表者名', memo: 'これはお客さんのメモです' },
                ],    
        }
    },
    methods: {
        row(item){
            this.$emit('selected',item);
        }
    }
});
