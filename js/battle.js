// plik Hero
class Hero {
        constructor(name,strength,stamina,esencja,okruchy,hp){
        this.name=name;
        this.strength=strength;
        this.stamina=stamina;
        this.esencja=esencja;
        this.okruchy=okruchy;
        this.hp=hp;
        this.dmg=strength; //w momencie konstrukcji dmg=strenght
        this.pancerz=stamina;
        this.lv=1;
        this.MaxHP=hp;
        this.MaxMP=okruchy;
        //this.SkillTree=[];
        this.Statusy=[];
            }
        LevelUP(gdzie){
            switch (gdzie){
                case "strength": this.strength+=1; break;
                case "stamina" : this.stamina+=1; break;
                case "esencja" : this.esencja+=1; break;
            }
            this.okruchy+=10; 
            this.hp+=10;
            this.MaxHP+=10;
            this.MaxMP+=10;
            this.lv+=1;
        }
        ShowHero(){
                let a="";
            for (const key in this) {
                a+=(key+": "+this[key]+"\n");
            }
            return a;
        }
    }
    const UnlockableHero =[
        //new Hero();
    ];
    function Random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function RandomHero(){
        const heroRand =new Hero(
            "Cezar", Random(1,6), Random(1,6), Random(1,6), 50,50
        );
        return heroRand;
    }
//koniec pliku hero
//Plik Skill
class SkillPasywny{
        constructor(kategoria,nazwa, opis){
            this.kategoria=kategoria;
            this.nazwa=nazwa;
            this.opis=opis;
        }
        ShowSkill(){
            if(this.cd!=null){
                return `${this.nazwa}: ${this.opis} CD:${this.cd}, koszt:${this.koszt}.`;
            }
            return `${this.nazwa}: ${this.opis}`;
        }
    }
    class Skill extends SkillPasywny{
        constructor(kategoria,nazwa, opis, cd, koszt){
                super(kategoria,nazwa, opis,);
                this.cd=cd;
                this.koszt=koszt;
            }
    }
    const Skills =[
        new Skill("Ostrze Penatgramu","Atak przebijaj??cy","Redukuje pancerz przeciwnika na 1 tur?? o Esencj??.",3,20),
        new Skill("Ostrze Penatgramu","Os??abienie","Przeciwnik przez 1 tur?? zadaje mniejsze obra??enia o Esencj??.",3,20),
        new Skill("Ostrze Penatgramu","Kontratak lotosu","Je??li przeciwnik zada?? 0 obra??e??, kontratakujesz.",1,10),
        new Skill("Pi??ciu Smok??w","Moc 5-Smok??w","Nast??pny atak ignoruje buffy przeciwnika.",4,20),
        new Skill("Pi??ciu Smok??w","Wzmocnienie 5-Smok??w","Zwi??ksza bazowe obra??enia na 1 tur?? o Esencj??.",3,20),
        new Skill("Pi??ciu Smok??w","Pancerz 5-Smok??w","Zwi??ksza pancerz na 1 tur?? o Esencja.",3,20),
        new Skill("Podstawy Przetrwania","Odpoczynek podr????nika", "Regeneruje po ka??dej walce dodatkowe [10+(Esencja x Lv)] HP i MP."),
        new Skill("Podstawy Przetrwania","Opoczynek ??owcy", "Podwaja regeneracje podr????nika."),
        new Skill("Podstawy Przetrwania","Opoczynek kr??lewski", "Potraja regeneracje podr????nika."),
        new Skill("Podstawy Przetrwania","Rzemios??o-podstawy", "Zamiast odpoczynku w obozie mo??esz tworzy?? losowy pospolity ekwipunek."),
        new Skill("Podstawy Przetrwania","Rzemios??o-zaawansowane", "Zamiast odpoczynku w obozie mo??esz tworzy?? wybrany pospolity ekwipunek."),
        new Skill("Podstawy Przetrwania","Alchemia-podstawy", "Zamiast odpoczynku w obozie mo??esz tworzy?? losow?? pospolit?? mikstur??."),
        new Skill("Podstawy Przetrwania","Alchemia-podstawy", "Zamiast odpoczynku w obozie mo??esz tworzy?? losow?? wybran?? mikstur??."),
    ];
//koniec pliku Skill
//Plik enemy
class Enemy {
        constructor(name,dmg,pancerz,hp,lokacja){
          this.name=name;
          this.dmg=dmg;
          this.pancerz=pancerz;
          this.hp=hp
          this.Statusy=[];
          this.lokacja=lokacja;
        }
        ShowEnemy(){
          for (const key in this) {
              console.log(key+": "+this[key]);
          }
      }
      }
      const bestiary =[
          new Enemy("Ma??lak",3, 0, 10,"Kana??y"),
          new Enemy("Muchomor",5, 0, 10,"Kana??y"),
          new Enemy("Pieczarka", 4, 1, 10,"Kana??y")
    
      ];
      function AddNewEnemy(name,dmg,pancerz,hp,lokacja){
          bestiary.push(new Enemy (name,dmg,pancerz,hp,lokacja));
    }
//koniec pliku enemy
// Tymczasowe zrobienie obiekt??w do bitwy, testy
const hero1= new Hero("testowy1",3,3,3,50,22)
const enemy1=new Enemy("testowy2",5,2,30,"kana??y");
const SkillStyl1=Skills.slice(0,6);
//Pobranie ataku i pancerza
const EnemyAtak= document.querySelector('#EnemyAtak');
const EnemyPancerz=document.querySelector('#EnemyPancerz');
const HeroAtak= document.querySelector('#HeroAtak');
const HeroPancerz=document.querySelector('#HeroPancerz');
//Pobranie paska HP i MP
const PasekEnemyHP1 = document.querySelector('#EnemyHP1');
const PasekHeroHP1 = document.querySelector('#HeroHP1');
const PasekHeroMP1 = document.querySelector('#HeroMP1');
//Ustawienie HP i MP na paskach
//Narazie na tymczasowych obiektach:
PasekEnemyHP1.max=enemy1.hp;
PasekHeroHP1.max=hero1.MaxHP;
PasekHeroMP1.max=hero1.MaxMP;
PasekEnemyHP1.value=enemy1.hp;
PasekHeroHP1.value=hero1.hp;
PasekHeroMP1.value=hero1.okruchy;
//Pobranie guzik??w skili 1-6
const ButtonSkill1 = document.querySelector('#ButtonSkill1');
const ButtonSkill2 = document.querySelector('#ButtonSkill2');
const ButtonSkill3 = document.querySelector('#ButtonSkill3');
const ButtonSkill4 = document.querySelector('#ButtonSkill4');
const ButtonSkill5 = document.querySelector('#ButtonSkill5');
const ButtonSkill6 = document.querySelector('#ButtonSkill6');
//Bez funksji strza??kowych guziki nie dzia??aj??.
const skill1=()=>{
        skill(1);
}
const skill2=()=>{
        skill(2);
}
const skill3=()=>{
        skill(3);
}
const skill4=()=>{
        skill(4);
}
const skill5=()=>{
        skill(5);
}
const skill6=()=>{
        skill(6);
}
//Dodanie nas??uchania klikania
ButtonSkill1.addEventListener("click", skill1);
ButtonSkill2.addEventListener("click", skill2);
ButtonSkill3.addEventListener("click", skill3);
ButtonSkill4.addEventListener("click", skill4);
ButtonSkill5.addEventListener("click", skill5);
ButtonSkill6.addEventListener("click", skill6);
//Guzik start 
const StartBtn = document.querySelector('#Start');
const CilkStart=()=>{
        Batlle();
}
StartBtn.addEventListener("click", CilkStart);
//Okej, funkcje
//Funkcja  zwraca dmg zandany przez kto i zmienia hp komu
function DMG(kto,komu){
        let bonsusDmg=kto.dmg;
             if(kto.Statusy!=null){//sprawdzamy czy kto ma buff do dmg
                     let del=[];
                     //biegniemy po ca??ej tablicy, zmniejszamy tury buff??w,
                     //a te co mia??by 0 , zapisujemy indeksy do del
                     for(let i=kto.Statusy.length-1; i>=0; i--){
                             if(kto.Statusy[i][1]=="dmg"){
                                     bonsusDmg+=kto.Statusy[i][2];
                                     if(kto.Statusy[i][0]==1){
                                             //console.log("jest"+i);
                                            del.push(i);                                       
                                     }else{
                                             kto.Statusy[i][0]-=1;}
                                     }
                             } 
                     //to tera usuwamy pokleji Statusy, kt??re mia??y znikn????
                     //bez obaw del jest posortowane od najwi??kszej do najmniejszej
                     del.forEach(el => {
                             kto.Statusy.splice(el,1);  
                     });
                     }
                     //nie mo??na atakowa?? ujemnie!
                     bonsusDmg=Math.max(bonsusDmg,0);
                     let pancerzAktualny=komu.pancerz;
                     if(komu.Statusy!=null){//sprawdzamy czy komu ma buff do pancerza
                             let del=[];
                             //biegniemy po ca??ej tablicy, zmniejszamy tury buff??w,
                             //a te co mia??by 0 , zapisujemy indeksy do del
                             for(let i=komu.Statusy.length-1; i>=0; i--){
                                     if(komu.Statusy[i][1]=="pancerz"){
                                        pancerzAktualny+=komu.Statusy[i][2];
                                             if(komu.Statusy[i][0]==1){
                                                     //console.log("jest"+i);
                                                    del.push(i);                                       
                                             }else{
                                                     komu.Statusy[i][0]-=1;}
                                             }
                                     } 
                             //to tera usuwamy pokleji Statusy, kt??re mia??y znikn????
                             //bez obaw del jest posortowane od najwi??kszej do najmniejszej
                             del.forEach(el => {
                                     komu.Statusy.splice(el,1);  
                             });
                             }
                             //pancerz nie mo??e by?? ujemny!
                             pancerzAktualny=Math.max(pancerzAktualny,0);
        let dmg =Math.max(bonsusDmg -pancerzAktualny,0);
        komu.hp-=dmg;
        //jeszcze aktualizacja paska, poprostu obu, potem pomy??le
        PasekEnemyHP1.value=enemy1.hp;
        PasekHeroHP1.value=hero1.hp;
        return dmg;
     }
//Funkcja  zwraca dmg zandany przez kto w pojednczym ataku i zmienia hp komu
function wielokrotnyDMG(kto,komu,ile){
             let bonsusDmg=kto.dmg;
             let pancerzAktualny=komu.pancerz;
             if(kto.Statusy!=null){//sprawdzamy czy kto ma buff do dmg
                     //biegniemy po ca??ej tablicy, i NIC NIE robimy z turami buf??w!
                     for(let i=kto.Statusy.length-1; i>=0; i--){
                             if(kto.Statusy[i][1]=="dmg"){
                                     bonsusDmg+=kto.Statusy[i][2];
                             } 
                     }
             }
                                  //nie mo??na atakowa?? ujemnie!
                                  bonsusDmg=Math.max(bonsusDmg,0);       
             if(komu.Statusy!=null){//sprawdzamy czy kto ma buff do pancerza
                     //biegniemy po ca??ej tablicy, i NIC NIE robimy z turami buf??w!
                     for(let i=kto.Statusy.length-1; i>=0; i--){
                             if(komu.Statusy[i][1]=="pancerz"){
                                pancerzAktualny+=komu.Statusy[i][2];
                             }
                     }
             } 
                                  //pancerz nie mo??e by?? ujemny!
                                  pancerzAktualny=Math.max(pancerzAktualny,0);
             //poprostu mno??ymy przez (ile-1) a potem urachamimy dmg, ??eby zmniejszy?? tury buf??w   
             let dmg =Math.max(bonsusDmg -pancerzAktualny,0);
             komu.hp-=((ile-1)*dmg);
             DMG(kto,komu);
             return dmg();
     }
//Oblicznie Warto??ci Ataku i pancerza do wy??wietlenie
function AtakPancerzValue(kto,nazwa){
        let dmg=kto.dmg;
        let pan=kto.pancerz;
        for(let i=kto.Statusy.length-1; i>=0; i--){
                if(kto.Statusy[i][1]=="dmg"){
                        dmg+=kto.Statusy[i][2];
                }
                if(kto.Statusy[i][1]=="pancerz"){
                        pan+=kto.Statusy[i][2];
                }
        }
        dmg=Math.max(dmg,0);
        pan=Math.max(pan,0);
        switch (nazwa){
                case "hero1":
                        HeroAtak.textContent=dmg;
                        HeroPancerz.textContent=pan;
                break;
                case "enemy1":
                        EnemyAtak.textContent=dmg;
                        EnemyPancerz.textContent=pan;
                break;
        }
}
//tymczasowa tabela CoolDownwarto?? w indeksie 0=skill1 cd;
const CD=[0,0,0,0,0,0];
//Zmniesza o koszt skila okruchy Hero i na jego pasku, wstawia do tabeli liczb?? tur
function  AktualizacjaOkruchyCD(IndexSkill, CDSkill){
     hero1.okruchy-=SkillStyl1[IndexSkill].koszt;
     PasekHeroMP1.value=hero1.okruchy;
     CD[IndexSkill]=CDSkill;
     //console.log(CD);
}

function skill(numer){
        if (numer==3 ||numer==4){
                console.log("Niezaimplementowane jeszcze");
                 return;  
        }
        if(hero1.okruchy<SkillStyl1[numer-1].koszt){
                console.log("Brak okruch??w");
                return;
        }
        if(CD[numer-1]>0){
                console.log(`Pozosta??a nast??puj??ca ilo???? tur: ${CD[numer-1]} do u??ycia`);
                return;
        }
 console.log(SkillStyl1[numer-1].ShowSkill());
 AktualizacjaOkruchyCD(numer-1, SkillStyl1[numer-1].cd);
        switch (numer){
                case 1:
 //Redukuje pancerz przeciwnika na 1 tur?? o Esencj??.
 enemy1.Statusy.push([1,"pancerz",-hero1.esencja]);
 AtakPancerzValue(enemy1,"enemy1");
                break;
                case 2:
 //Przeciwnik przez 1 tur?? zadaje mniejsze obra??enia o Esencj??.
 enemy1.Statusy.push([1,"dmg",-hero1.esencja]);
 AtakPancerzValue(enemy1,"enemy1");
                break;
                case 3:
//Je??li przeciwnik zada?? 0 obra??e??, kontratakujesz.
 //b??dzie trudno!
console.log(DMG(hero1,enemy1));
                break;
                case 4:
 //Nast??pny atak ignoruje buffy przeciwnika.
hero1.Statusy.pop(); console.log(hero1);//usuwa ostatni element
                break;
                case 5:
//Zwi??ksza bazowe obra??enia na 1 tur?? o Esencj??
hero1.Statusy.push([1,"dmg",hero1.esencja]);
AtakPancerzValue(hero1,"hero1");
                break;
                case 6:
//Zwi??ksza pancerz na 1 tur?? o Esencja.
hero1.Statusy.push([1,"pancerz",hero1.esencja]);
AtakPancerzValue(hero1,"hero1");
                break;
        }
}
function Zapowied??Ataku(){
        //funkcja pokazuje co przeciwnik zrobi w swojej turze.
        let numer =Math.floor(Math.random() * (5 - 1 + 1)) + 1;
        switch (numer){
                case 1: //u??yje wzmocnienia
console.log(enemy1.name+" u??yje wzmocnienia!");
                break;
                case 2: //u??yje os??abienia
console.log(enemy1.name+" u??yje os??abienia!");
                break;
                case 3: //atak!
console.log(enemy1.name+" zatakuje!");
                break;
                case 4: //2xatak!
console.log(enemy1.name+" zatakuje 2 razy!");
                break;
                case 5: //3xatak!
console.log(enemy1.name+" zatakuje 3 razy!");
                break;
        }
        return numer;
}

function PreBatlle(){
        HeroAtak.textContent=hero1.dmg;
        HeroPancerz.textContent=hero1.pancerz;
        EnemyAtak.textContent=enemy1.dmg;
        EnemyPancerz.textContent=enemy1.pancerz;
        console.log(hero1.ShowHero());
}
PreBatlle();
//Po ka??dej turze okruchy si?? odnawiaj?? o 10
function OdnowienieOkruch??w(){
        console.log("zregereowa??e?? 10 okruch??w!");
        hero1.okruchy+=10;
        PasekHeroMP1.value=hero1.okruchy;
}
//Po ka??dej turze aktualizujemy CD guzik??w
function AktualizacjaCD(){
        CD.forEach((el,index) => {
                if (el>0){
                        CD[index]-=1; 
                }
        });
}
function Batlle(){
        //zadnie dmg przez hero
        DMG(hero1,enemy1);
        //od??wierzamy pasek atk/pancerz hero
        AtakPancerzValue(hero1,"hero1");
        if(enemy1.hp<=0){
                alert("Wygra??e??!!!");
        } else{
                DMG(enemy1,hero1);
                AtakPancerzValue(enemy1,"enemy1");  
        }
        if(hero1.hp<=0){
                alert("Przegra??e??!!!");
        }
        console.log("TwojeHP="+hero1.hp," EnemyHP="+ enemy1.hp);
        OdnowienieOkruch??w();
        AktualizacjaCD();
}