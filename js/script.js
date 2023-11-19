/* ↓↓↓↓↓↓↓↓↓↓↓↓↓↓  JavaScript ↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 


■命令したいHTMLタグを指定する
$('●●●')


■クリックイベントの設定
$('●●●').on('click', function(){


});

■代表的なjQueryの命令
show(), hide(), fadeOut(), append()

■変数
const ●●●　= ●●●;
let ●●●　= ●●●;

■if文
if(){

}else if(){


}else{


}

*/

$('#btn').on("click", function () {
  let num = Math.ceil(Math.random() * 100);

  if (num === 1) {
    $("#result4").html('<img src="images/apple.png" />');
    $('#result5').html('・Apple <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-point.png" />');
    $('#result6').html('Apple Inc.は、アメリカ合衆国の多国籍テクノロジー企業である。カリフォルニア州クパチーノに本社を置く。デジタル家庭電化製品、ソフトウェア、オンラインサービスの開発・販売を行っている。');
  } else if (num === 2) {
    $('#result4').html('<img src="images/amazon.png" />');
    $('#result5').html('・Amazon.com <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-point.png" />');
    $('#result6').html('Amazon.com, Inc.は、アメリカ合衆国のワシントン州シアトルに本拠地を置く企業である。主軸はインターネット経由の小売であるが、その他にもクラウドコンピューティングなどを手掛けている。 同社は「世界で最も影響力のある経済的・文化的勢力の一つ」と呼ばれ、世界で最も価値のあるブランドとされている。');
  } else if (num === 3) {
    $('#result4').html('<img src="images/Googlelogo.png" />');
    $('#result5').html('・Google（持ち株会社:Alphabet) <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-point.png" />');
    $('#result6').html('Google LLCは、インターネット関連のサービスと製品に特化したアメリカ合衆国の企業 である。Alphabetの子会社。 世界最大の検索エンジン、オンライン広告、クラウドコンピューティング、ソフトウェア、ハードウェア関連の事業がある。アメリカ合衆国の主要なIT企業で、 ビッグ・テックの一つ。');
  } else if (num === 4) {
    $('#result4').html('<img src="images/Meta.png" />');
    $('#result5').html('・Meta(旧Facebook) <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-point.png" />');
    $('#result6').html('メタ・プラットフォームズ、通称Metaは、アメリカ合衆国のカリフォルニア州メンローパークに本社を置く多国籍テクノロジー・コングロマリットである。2021年に、Facebook, Inc.から現社名に変更した。');
  } else if (num % 99 == 0) {
    $('#result4').html('<img src="images/Microsoft.png" />');
    $('#result5').html('・Microsoft <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-point.png" />');
    $('#result6').html('マイクロソフトは、アメリカ合衆国ワシントン州に本社を置く、ソフトウェアを開発、販売する会社である。1975年にビル・ゲイツとポール・アレンによって創業された。1985年にパソコン用OSのWindowsを開発。1990年にWindows向けのオフィスソフトとしてMicrosoft Officeを販売。1995年にウェブブラウザのInternet Explorerをリリース。2001年に家庭用ゲーム機のXboxを販売。2009年に検索エンジンのBingを設立。2010年にクラウドサービスとしてAzureを開始。2015年7月15日Microsoft Edgeを開発、そして展開。2021年11月時点での時価総額がAppleに次いで世界2位');
  } else if (num % 50 == 0) {
    $('#result4').html('<img src="images/IBM.png" />');
    $('#result5').html('・IBM <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-no-point.png" />');
    $('#result6').html('IBMは1911年にC-T-Rとして創立され、特に1960年代以降はコンピュータ市場で圧倒的な影響力を持ったが、1990年代以降はコンサルティングを含めたサービスとソフトウェア中心の事業に舵を切り、2010年代頃にはクラウドコンピューティングとコグニティブコンピューティングを提供する企業と自己定義している。');
  } else if (num % 49 == 0) {
    $('#result4').html('<img src="images/dell.jpg" />');
    $('#result5').html('・Dell <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-no-point.png" />');
    $('#result6').html('デル・テクノロジーズ（Dell Technoligies）は、アメリカ合衆国の多国籍コンピュータテクノロジー企業。世界最大級のテクノロジー企業であり、コンピュータおよび関連製品・サービスの開発・販売・修理・サポートを行っている他、米国および世界各国で16万5000人以上の従業員を雇用している');
  } else if (num % 48 == 0) {
    $('#result4').html('<img src="images/intel.jpg" />');
    $('#result5').html('・Intel <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-no-point.png" />');
    $('#result6').html('インテルは、世界最大手の中央処理装置(CPU)および半導体素子のメーカー。');
  } else if (num % 30 == 0) {
    $('#result4').html('<img src="images/NETFLIX.jpg" />');
    $('#result5').html('・NETFLIX <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-no-point.png" />');
    $('#result6').html('Netflixは、アメリカ合衆国のオーバー・ザ・トップ・コンテンツ・プラットフォーム。1997年にリード・ヘイスティングスとマーク・ランドルフによって、カリフォルニア州スコッツバレーで設立されたカリフォルニア州ロスガトスに本社を置くNetflix, Inc.によって運営されている');
  } else if (num % 25 == 0) {
    $('#result4').html('<img src="images/DeNA.png" />');
    $('#result5').html('・DeNA <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-no-point.png" /> <img src="images/star-no-point.png" />');
    $('#result6').html('株式会社ディー・エヌ・エー（英: DeNA Co.,Ltd.[3]、以下DeNA）は、日本のインターネット関連企業。コンピュータエンターテインメント協会正会員。スマートフォン用ゲームの開発・配信を主業としつつ、SNS運営や電子商取引サービスなどを行う。');
  } else if (num % 21 == 0) {
    $('#result4').html('<img src="images/Alibaba.jpg" />');
    $('#result5').html('・Aclibaba Group <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-no-point.png" /> <img src="images/star-no-point.png" />');
    $('#result6').html('アリババグループは、中華人民共和国を代表する世界的なテクノロジー企業であり、持株会社。本社は浙江省杭州市。日本のソフトバンクグループが筆頭株主であり、同社の持分適用会社であったが、2022年に株式の一部を売却したことによりソフトバンクグループの持分適用会社から外れた。');
  } else if (num % 20 == 0) {
    $('#result4').html('<img src="images/accenture.jpg" />');
    $('#result5').html('・Accenture <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-no-point.png" /> <img src="images/star-no-point.png" />');
    $('#result6').html('アクセンチュアは、世界最大級の経営コンサルティングファーム[1] である。様々な分野・産業に対し戦略、業務、IT､デジタル広告などのあらゆるコンサルティングを提供している。また、IBMに次ぐ、システムの設計、開発、運用等を手がけるITサービス企業でもある。');
  } else if (num % 20 == 0) {
    $('#result4').html('<img src="images/HUAWEI.jpg" />');
    $('#result5').html('・HUAWEI <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-no-point.png" /> <img src="images/star-no-point.png" />');
    $('#result6').html('1987年に、携帯電話のインフラストラクチャー整備に必要な通信機器を開発するベンダーとして、中華人民共和国深圳市に設立された、世界有数のICTソリューション・プロバイダー');
  } else if (num % 15 == 0) {
    $('#result4').html('<img src="images/GMO.jpg" />');
    $('#result5').html('・GMOインターネット <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-no-point.png" /> <img src="images/star-no-point.png" />');
    $('#result6').html('GMOインターネットグループ株式会社は、インターネット関連事業を行う東証プライム上場企業で、GMOインターネットグループの持株会社でもある。本社は東京都渋谷区桜丘町のセルリアンタワー内に所在する。JPX日経インデックス400の構成銘柄の一つ。');
  }  else if (num % 14 == 0) {
    $('#result4').html('<img src="images/ORACLE.jpg" />');
    $('#result5').html('・ORACLE <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-no-point.png" /> <img src="images/star-no-point.png" />');
    $('#result6').html('Oracle（オラクル）は、データベース管理システム（DBMS）を中心に業務用のパッケージソフトウェアを開発・販売している企業、また、同社が販売するリレーショナルデータベース管理システム（RDBMS）、「Oracle Database」を指す。');
  }  else if (num % 13 == 0) {
    $('#result4').html('<img src="images/Baidu.jpg" />');
    $('#result5').html('・Baidu(百度) <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-no-point.png" /> <img src="images/star-no-point.png" />');
    $('#result6').html('百度は、中華人民共和国で最大の検索エンジンを提供する会社である。創業は2000年1月。本社は北京市にあり、百度百科や百度入力方法なども提供している。 全世界の検索エンジン市場において、Googleに次いで第2位、中国大陸ではGoogleなどは利用できず、百度が最大のシェアを占める。');
  } else if (num % 12 == 0) {
      $('#result4').html('<img src="images/digitalhollywood.jpg" />');
      $('#result5').html('・デジタルハリウッド株式会社 <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-no-point.png" /> <img src="images/star-no-point.png" />');
      $('#result6').html('東京都千代田区に本社を置く、教育サービス企業。 マルチメディアコンテンツに特化した、予備校および大学・大学院の運営を行う。'); 
  } else if (num % 11 == 0) {
    $('#result4').html('<img src="images/CARTA.png" />');
    $('#result5').html('・CARTA HODLINGS <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-no-point.png" /> <img src="images/star-no-point.png" />');
    $('#result6').html('株式会社CARTA HOLDINGSは、東京都渋谷区に本社を置く、メディア事業とアドテクノロジー事業を手がける子会社を統括する電通グループ傘下の純粋持株会社。');
  } else if (num % 10 == 0) {
    $('#result4').html('<img src="images/fujitsu.jpg" />');
    $('#result5').html('・富士通 <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-no-point.png" /> <img src="images/star-no-point.png" />');
    $('#result6').html('富士通株式会社は、東京都港区東新橋に本社を置く、日本の総合エレクトロニクスメーカー、総合ITベンダー。通信システム、情報処理システムおよび電子デバイスの製造・販売ならびにそれらに関するサービスの提供を行っている。日経平均株価およびTOPIX Large70の構成銘柄の一つ');
  } else if (num % 9 == 0) {
    $('#result4').html('<img src="images/Rakuten.jpg" />');
    $('#result5').html('・Rakuten<img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-no-point.png" /> <img src="images/star-no-point.png" />');  
    $('#result6').html('楽天グループ株式会社（らくてんグループ、英: Rakuten Group, Inc.）は、東京都世田谷区に本社を置く、インターネット関連サービスを中心に展開する日本の企業。日経平均株価の構成銘柄の一つである');
  } else if (num % 8 == 0) {
    $('#result4').html('<img src="images/SAMSUNG.jpg" />');
    $('#result5').html('・SAMSUNG <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-no-point.png" /> <img src="images/star-no-point.png" />');  
    $('#result6').html('サムスン電子は、2010年の売上高が韓国のGDPの22%、時価総額は韓国株式市場の25%（外国人持ち株率は20%前後）で、資産は韓国国富の3分の1に迫る、韓国最大の企業である。');
  } else if (num % 7 == 0) {
    $('#result4').html('<img src="images/NTT.jpg" />');
    $('#result5').html('・NTTグループ <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-no-point.png" /> <img src="images/star-no-point.png" />');
    $('#result6').html('ITサービス専業企業として日本最大手で、世界6位のシェアを持つ[4]。国内外300社を超える傘下企業を持つ世界有数のIT企業である。日経平均株価およびJPX日経インデックス400の構成銘柄の一つ');
  }
  else if (num % 6 == 0) {
    $('#result4').html('<img src="images/CISCO.png" />');
    $('#result5').html('・CISCO <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-no-point.png" /> <img src="images/star-no-point.png" /> <img src="images/star-no-point.png" />');
    $('#result6').html('シスコシステムズ（英: Cisco Systems, Inc.）は、アメリカ合衆国カリフォルニア州サンノゼに本社を置く、世界最大のコンピュータネットワーク機器開発会社である。Cisco（シスコ）の略称で呼ばれることが多い');
  }
  else if (num % 5 == 0) {
      $('#result4').html('<img src="images/Tencent.jpg" />');
      $('#result5').html('・Temcent <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-no-point.png" /> <img src="images/star-no-point.png" /> <img src="images/star-no-point.png" />');
      $('#result6').html('広東省深圳市に本拠を置く中国の多国籍テクノロジー・コングロマリット。インターネット関連の子会社を通してソーシャル・ネットワーキング・サービス、インスタントメッセンジャー、Webホスティングサービスなどを提供している。');
  }
  else if (num % 4 == 0) {
      $('#result4').html('<img src="images/MIXI.png" />');
      $('#result5').html('・MIXI <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-no-point.png" /> <img src="images/star-no-point.png" /> <img src="images/star-no-point.png" />');
      $('#result6').html('ソーシャル・ネットワーキング・サービス (SNS) であるmixiを運営する会社として創業したが、2020年度では『モンスターストライク』（通称・モンスト）をはじめとするデジタルエンターテインメント事業が売り上げの8割以上を占めている。');
  }
  else if (num % 3 == 0) {
      $('#result4').html('<img src="images/LayerX.png" />');
      $('#result5').html('・LayerX <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-no-point.png" /> <img src="images/star-no-point.png" /> <img src="images/star-no-point.png" />');
      $('#result6').html('LayerXとは、2018年に設立された新しい企業の一つで、GunosyとAnyPayという二つの企業の合弁会社として設立されました。Gunosyは優秀なエンジニア集団でブロックチェーン関連の技術に関して研究開発を行う企業で、不動産分野においてはブロックチェーン技術を導入するための研究開発をすでにスタートしています。');
  }
  else if (num % 2 == 0) {
  $('#result4').html('<img src="images/yumemi.png" />');
  $('#result5').html('・株式会社ゆめみ <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-no-point.png" /> <img src="images/star-no-point.png" /> <img src="images/star-no-point.png" />');
  $('#result6').html('2000年1月27日に設立し、インターネットを主とした開発・制作・コンサルティングの内製化支援、オムニチャネルを中心としたデジタルマーケティング支援、スマホアプリ開発、デジタルメディアコンテンツ運用/自社サービス運営を行っています。 主に受託開発というのをメインでやっている開発会社になります。');
  }
  else {
    $('#result4').html('<img src="images/churadata.png" />');
    $('#result5').html('・ちゅらデータ <img src="images/star-point.png" /> <img src="images/star-point.png" /> <img src="images/star-no-point.png" /> <img src="images/star-no-point.png" /> <img src="images/star-no-point.png" />');
    $('#result6').html('ちゅらデータ株式会社は、データ分析における高度な研究開発を行う拠点として、DATUM STUDIO株式会社の完全子会社として設立されました。親会社であるDATUM STUDIOは、日本有数の分析者であり多数の著書も出版している酒巻・里の2人が立ち上げた、現在急成長中のデータ分析カンパニーです。');

  }
});