function Sample(){                //--> 함수임~       
                                 // 컴포넌트를 처음에 나열하기  
  return(                           // -> 컴포넌트들의 모임~~ (필요하면 갖다 쓰는것...) 현재 컴포넌트 4개임 / 컴포넌트란? 함수를 의미한대............
    <>                  
    <SkipComponent/>
    <Header/>
    <WrapComponent/>
    <Footer/>

    </>
  );

}
// --------------------------------------------밑에 쓸떄 위의 컴포넌트를 차례대로 써줘야함--------------------------

//Skip
function SkipComponent(){         //skip컴포넌트..
  return(
    <>
      <ul className="skip">              {/* class대신 className이라고 씀~~ */}
        <li><a href="#main">콘텐츠 바로가기</a></li>
      </ul>
    </>
  );
}
// ----------------------------------------------------------------------------
//Header
function Header(){                 //header 컴포넌트
  return(
    <>
      <header>
        <h1><a href="#">SAMPLE</a></h1>
      </header>
    </>
  )
}
// ----------------------------------------------------------------------
//Wrap
function WrapComponent(){
  return(
    <>
      <MainComponent/>            {/* wrapcomponent에서 또 컴포넌트를 부름*/}
    </>
  );
}



//Main
function MainComponent(){
  return(
    <>
      <div id="menubox">

        <nav id="menu">
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">BRAND</a></li>
            <li><a href="#">STORY</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>
        </nav>

        <div className="submenu">
          <div className="box">
            <ul>
              <li><a href="#">LIST</a></li>
              <li><a href="#">LIST</a></li>
              <li><a href="#">LIST</a></li>
              <li><a href="#">LIST</a></li>
            </ul>

            <ul>
              <li><a href="#">LIST</a></li>
              <li><a href="#">LIST</a></li>
              <li><a href="#">LIST</a></li>
              <li><a href="#">LIST</a></li>
            </ul>

            <ul>
              <li><a href="#">LIST</a></li>
              <li><a href="#">LIST</a></li>
              <li><a href="#">LIST</a></li>
              <li><a href="#">LIST</a></li>
            </ul>

            <ul>
              <li><a href="#">LIST</a></li>
              <li><a href="#">LIST</a></li>
              <li><a href="#">LIST</a></li>
              <li><a href="#">LIST</a></li>
            </ul>
          </div>  {/*box */}
        </div>       {/*submenu */}

      </div>

      <section id="banner">
        <div><img src="../img/p_main1.jpg" alt="ban" /></div>
        <div><img src="../img/p_main1.jpg" alt="ban" /></div>
      </section>

      <section id="main">
        <h2>LIST</h2>
        <ul>
          <li><a href="#"><img src="../img/mpr1.png" alt="1" /></a></li>
          <li><a href="#"><img src="../img/mpr2.png" alt="1" /></a></li>
          <li><a href="#"><img src="../img/mpr3.png" alt="1" /></a></li>
          <li><a href="#"><img src="../img/mpr4.png" alt="1" /></a></li>
        </ul>
      </section>

      <section id="main1">
        <h2>LIST</h2>
        <ul>
          <li><a href="#"><img src="../img/ppr1.png" alt="1" /></a></li>
          <li><a href="#"><img src="../img/ppr2.png" alt="1" /></a></li>
          <li><a href="#"><img src="../img/ppr3.png" alt="1" /></a></li>
          <li><a href="#"><img src="../img/ppr4.png" alt="1" /></a></li>
        </ul>
      </section>

      <section id="ban1">
        <img src="../img/p_bn.png" alt="bb"></img>
      </section>

      <section id="main2">
        <h2>LIST</h2>
        <ul>
          <li><a href="#"><img src="../img/ppr1.png" alt="1" /></a></li>
          <li><a href="#"><img src="../img/ppr2.png" alt="1" /></a></li>
          <li><a href="#"><img src="../img/ppr3.png" alt="1" /></a></li>
          <li><a href="#"><img src="../img/ppr4.png" alt="1" /></a></li>
        </ul>
      </section>

    </>
  );
}


// --------------------------------------------------------
function Footer(){
  return(
    <>
      <footer>
        FOOTER
      </footer>
    </>
  );
}

// -----------------------------------------------------------
ReactDOM.render(
  <Sample/>,
  document.getElementById("root")
);