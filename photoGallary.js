const state={};
state.count=+0;
document.querySelector('#photoGallaryOk').addEventListener('click',()=>{
    state.count++;
    console.log(state.count);
    if(state.count==44){
        state.count=0;
    }else{
        document.querySelector('#photoGallaryOk').setAttribute('src',`${listPhoto[state.count]}`);
    }
});
let listPhoto = ['img/tatiana/WhatsApp Image 2024-07-06 at 19.17.26.jpeg',
  'img/tatiana/WhatsApp Image 2024-07-06 at 19.20.10.jpeg',
  'img/tatiana/WhatsApp Image 2024-07-06 at 19.20.11.jpeg',
  'img/tatiana/WhatsApp Image 2024-07-06 at 19.20.41.jpeg',
  'img/tatiana/WhatsApp Image 2024-07-06 at 19.20.49.jpeg',
  'img/tatiana/WhatsApp Image 2024-07-06 at 19.20.53.jpeg',
  'img/tatiana/WhatsApp Image 2024-07-06 at 19.22.03.jpeg','img/to/154864135484351.jpeg',
  'img/to/156465135458485.jpeg',
  'img/to/1564846584684138434.jpeg',
  'img/to/15847864513547836.jpeg',
  'img/to/15848641351458473.jpeg',
  'img/to/165841513.1231212121.jpeg',
  'img/to/165847846519419194897.jpeg',
  'img/to/16846541654854684.jpeg',
  'img/to/16987451313.jpeg',
  'img/to/4545.jpeg',
  'img/to/4685465418541354684635.jpeg',
  'img/to/478465131584.jpeg',
  'img/to/48416984.jpeg',
  'img/to/484684654687984946.jpeg',
  'img/to/4849857.jpeg',
  'img/to/547841315845.jpeg',
  'img/to/5484131324684635.jpeg',
  'img/to/548465864464136.jpeg',
  'img/to/548641351458438.jpeg',
  'img/to/54864361554765.jpeg',
  'img/to/5646845135415321324564.jpeg',
  'img/to/56468487841651431361344.jpeg',
  'img/to/5647841354368.jpeg',
  'img/to/564785413215465.jpeg',
  'img/to/5648135468435.jpeg',
  '5img/to/648413132121313131313.jpeg',
  'img/to/5648413515684768.jpeg',
  'img/to/56846541654.jpeg',
  'img/to/5847813548543.jpeg',
  'img/to/864684351358475848541.jpeg',
  'img/to/8798468464194641.jpeg','img/WhatsApp Image 2024-07-06 at 16.27.59.jpeg',
  'img/WhatsApp Image 2024-07-06 at 16.28.08.jpeg',
  'img/WhatsApp Image 2024-07-06 at 16.28.21.jpeg',
  'img/WhatsApp Image 2024-07-06 at 16.28.39.jpeg',
  'img/WhatsApp Image 2024-07-06 at 16.28.52.jpeg',
  'img/Zmeinogorsk.jpg'
]