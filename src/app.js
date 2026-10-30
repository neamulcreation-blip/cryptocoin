:root{--bg:#f7f8fa;--surface:#fff;--ink:#24282e;--muted:#92969e;--line:#eceef1;--orange:#ed794f;--orange-light:#fef1eb;--green:#319d7c;--red:#d76469;--sidebar:#20252a;--heading:'Manrope',sans-serif;--body:'DM Sans',sans-serif}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);font:14px var(--body);-webkit-font-smoothing:antialiased}
button,input,select{font:inherit}
button,a,input,select{-webkit-tap-highlight-color:transparent}
button{cursor:pointer}
button{border:0}
button:disabled{cursor:wait;opacity:.55}
button,a,input,select{-webkit-tap-highlight-color:transparent}
button,a{transition:background .18s,color .18s,box-shadow .18s,transform .18s}
button:active:not(:disabled){transform:translateY(1px)}
a{color:inherit;text-decoration:none}
button:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible{outline:3px solid #ed794f80;outline-offset:3px}
svg.icon{width:20px;height:20px;stroke-width:1.65;vertical-align:middle;fill:none;stroke:currentColor;flex-shrink:0}
.hidden{display:none!important}
.skip-link{position:fixed;left:12px;top:-60px;background:white;padding:12px;z-index:20}
.skip-link:focus{top:12px}
.app-shell{display:grid;grid-template-columns:230px minmax(0,1fr);min-height:100vh}
.sidebar{background:var(--sidebar);color:#a4a9ae;padding:37px 20px 0;display:flex;flex-direction:column;position:fixed;width:230px;height:100dvh;z-index:5;overflow-y:auto}
.brand{display:flex;align-items:center;color:#fff;font:750 22px var(--heading);letter-spacing:-1.1px;white-space:nowrap;margin:0 6px 40px;gap:0}
.brand>span:nth-child(2){font-weight:400;color:#b8bcc0}
.brand-mark{display:inline-flex;align-items:center;justify-content:center;background:var(--orange);color:#fff;width:34px;height:36px;border-radius:11px;font:bold 27px var(--body);transform:rotate(-7deg);margin-right:10px;letter-spacing:0}
.brand-dot{width:5px;height:5px;background:var(--orange);border-radius:50%;margin-left:4px;margin-top:11px}
.workspace{display:flex;gap:10px;align-items:center;padding:13px 8px 22px;border-bottom:1px solid #373b40;font-size:11px;color:#d4d7da;line-height:1.7}
.workspace small{display:block;color:#828990;font-size:10px}
.workspace>span:last-child svg{width:12px}
.workspace-icon{display:grid;place-items:center;width:30px;height:32px;border-radius:8px;border:1px solid #4e5256;color:#d8dadc}
.nav-caption{font-size:9px;letter-spacing:1.9px;color:#747b82;margin:29px 14px 13px;font-weight:600}
.nav-link{display:flex;align-items:center;gap:13px;width:100%;padding:13px 15px;margin:4px 0;text-align:left;background:transparent;color:#a5aab1;border-radius:9px;font-size:12px;font-weight:500;position:relative}
.nav-link:hover{color:white;background:#2c3137}
.nav-link.active{color:#fff;background:#383532}
.nav-link.active:before{content:'';position:absolute;left:-20px;top:14px;bottom:14px;width:3px;border-radius:0 2px 2px 0;background:var(--orange)}
.nav-link.active svg{color:#f29a78}
.nav-tag{margin-left:auto;font-size:9px;color:#bfc3c8;background:#3d4247;border-radius:5px;padding:3px 6px}
.sidebar-bottom{margin-top:auto;padding-top:35px}
.practice-note{background:linear-gradient(130deg,#343a3e,#2b3035);border:1px solid #41464b;border-radius:12px;padding:18px 15px;margin:0 5px 24px;position:relative;overflow:hidden}
.practice-orbit{display:block;color:#efaa8e;margin-bottom:13px}
.practice-orbit svg{width:27px;height:27px}
.practice-note strong{font:600 13px var(--heading);color:#e8e9e9}
.practice-note p{font-size:10px;color:#a0a5aa;line-height:1.8;margin:8px 0 16px}
.practice-note button{background:transparent;padding:0;color:#f3b396;font-size:10px}
.practice-note button span{padding-left:10px}
.sidebar-user{display:flex;align-items:center;gap:9px;border-top:1px solid #363b40;margin-top:21px;padding:21px 3px}
.avatar{display:inline-flex;align-items:center;justify-content:center;width:33px;height:33px;border-radius:50%;background:#f0dccb;color:#725d4c;font-weight:650;font-size:12px;flex-shrink:0}
.user-copy{min-width:0}
.user-copy strong{display:block;font-weight:500;font-size:11px;color:#f2f2f3;max-width:115px;overflow:hidden;text-overflow:ellipsis}
.user-copy small{display:block;font-size:8px;color:#8c9298;margin-top:4px}
.sidebar-user .icon-button{color:#a2a7ab;padding:0;margin-left:auto}
.content-shell{grid-column:2;min-width:0}
.topbar{height:83px;background:#fff;border-bottom:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;padding:0 38px;gap:16px}
.breadcrumb{display:flex;align-items:center;gap:20px;color:#b1b4bb;font-size:11px}
.breadcrumb svg{width:17px}
.breadcrumb strong{color:#60656d;font-weight:500}
.top-actions{display:flex;align-items:center;gap:22px}
.market-status{display:flex;align-items:center;gap:7px;font-size:10px;color:#747c83}
.status-dot{height:6px;width:6px;background:#58aa91;border-radius:50%;box-shadow:0 0 0 3px #eaf4ef}
.top-divider{height:23px;width:1px;background:var(--line)}
.icon-button{background:transparent;display:inline-flex;align-items:center;justify-content:center;color:#8b9199;width:32px;height:32px;border-radius:8px;position:relative}
.icon-button:hover{background:#f1f2f4;color:var(--ink)}
.notification-dot{width:5px;height:5px;background:var(--orange);border-radius:50%;position:absolute;right:7px;top:5px;border:1px solid white}
.account-button{display:flex;align-items:center;gap:10px;background:transparent;color:#505760;font-size:11px}
.account-button svg{width:13px;height:13px}
.avatar.small{width:31px;height:31px;font-size:11px}
main{padding:35px 38px 0;max-width:1680px;margin:auto}
.page-heading{display:flex;justify-content:space-between;gap:20px;align-items:center;margin-bottom:28px}
.eyebrow{font-size:8px;font-weight:600;letter-spacing:1.8px;display:flex;gap:7px;align-items:center;color:#94999e;margin-bottom:10px}
.tiny-line{height:1px;width:16px;background:var(--orange)}
h1{font:750 clamp(25px,2.3vw,35px)/1.3 var(--heading);letter-spacing:-1.3px;margin:0 0 10px}
h1>span{color:var(--orange)}
.page-heading p{font-size:11px;color:#969ba2;margin:0}
.heading-end{display:flex;flex-direction:column;align-items:flex-end;gap:13px;color:#969ba2;font-size:9px;white-space:nowrap}
.secondary-button{display:inline-flex;align-items:center;justify-content:center;gap:8px;background:white;border:1px solid #e4e7eb;border-radius:7px;padding:10px 13px;color:#636b73;font-size:10px;font-weight:500}
.secondary-button:hover{background:#f3f4f5;border-color:#d0d4d9}
.secondary-button svg{width:13px;height:13px}
.primary-button{display:inline-flex;align-items:center;justify-content:center;gap:10px;background:var(--orange);color:white;border-radius:8px;padding:12px 18px;font-size:12px;font-weight:600}
.primary-button:hover{background:#db6941;box-shadow:0 4px 10px #ee794f20}
.primary-button svg{width:16px}
.summary-grid{display:grid;grid-template-columns:1.05fr 1.6fr;gap:20px;margin-bottom:25px}
.balance-card{background:#272c30;color:white;border-radius:13px;padding:24px 25px;min-height:183px;position:relative;overflow:hidden;isolation:isolate}
.balance-card:before,.balance-card:after{content:'';position:absolute;border:1px solid #ffffff09;border-radius:50%;width:245px;height:245px;right:-88px;top:-80px;z-index:-1}
.balance-card:after{width:190px;height:190px;right:-61px;top:-53px}
.balance-label{font-size:11px;color:#bdc0c3;display:flex;align-items:center;gap:9px}
.balance-label button{background:transparent;color:#939a9e;padding:0;line-height:1}
.balance-label svg{width:14px;height:14px}
.balance-tag{position:absolute;right:23px;top:22px;color:#a4aaa9;background:#ffffff0c;border:1px solid #ffffff0e;font-size:8px;letter-spacing:1px;padding:5px 7px;border-radius:5px}
.balance-value{font:650 34px var(--heading);letter-spacing:-1.2px;margin:15px 0 8px}
.balance-value small{font:450 12px var(--body);color:#90969a;margin-left:7px;letter-spacing:0}
.balance-meta{font-size:10px;color:#aab0b4;display:flex;align-items:center;gap:7px}
.balance-meta .positive{background:#3e69502e;color:#87baa1;padding:3px 5px;border-radius:4px;font-size:9px}
.balance-bottom{display:flex;justify-content:space-between;align-items:center;margin-top:23px}
.balance-bottom>span{font-size:9px;color:#8f979c}
.balance-bottom button{background:#ffffff0e;color:#dce0e2;border:1px solid #ffffff17;border-radius:6px;padding:7px 10px;font-size:9px}
.balance-bottom button:hover{background:#ffffff20}
.market-highlights{background:#fff;border:1px solid var(--line);border-radius:13px;padding:21px 23px;display:flex;flex-direction:column}
.section-top{display:flex;align-items:center;justify-content:space-between;gap:10px}
.section-top h2,.panel-heading h2{font:700 13px var(--heading);margin:0;letter-spacing:-.2px}
.muted{color:var(--muted)}
.small-text{font-size:10px}
.live-label{display:flex;align-items:center;gap:5px;color:#9a9fa6;font-size:8px}
.live-label i{width:4px;height:4px;border-radius:50%;background:#61a18c}
.highlight-grid{display:grid;grid-template-columns:repeat(3,1fr);margin-top:24px}
.highlight{padding:0 16px;border-right:1px solid var(--line);min-width:0}
.highlight:first-child{padding-left:0}
.highlight:last-child{border:0;padding-right:0}
.coin-heading{display:flex;align-items:center;gap:7px;font-size:10px;font-weight:600}
.coin-heading small{color:#a0a5ac;font-size:8px;font-weight:400}
.coin-icon{display:inline-flex;width:27px;height:27px;border-radius:50%;align-items:center;justify-content:center;background:var(--coin-bg,#f4f4f4);color:var(--coin-color,#575b60);font:600 18px var(--body);flex-shrink:0}
.coin-icon.btc{--coin-bg:#fff1de;--coin-color:#e7a445}
.coin-icon.eth{--coin-bg:#edf0fb;--coin-color:#8794c6}
.coin-icon.sol{--coin-bg:#eaf5f1;--coin-color:#72a38b}
.coin-icon.bnb{--coin-bg:#fff6d9;--coin-color:#c1a34f}
.coin-icon.xrp{--coin-bg:#edf0f2;--coin-color:#636f7c}
.coin-icon.ada{--coin-bg:#eaf2ff;--coin-color:#6f95c9}
.coin-icon.avax{--coin-bg:#ffeded;--coin-color:#d77c7c}
.coin-icon.doge{--coin-bg:#f5f0dc;--coin-color:#b5a062}
.highlight-price{font:700 19px var(--heading);letter-spacing:-.6px;margin:12px 0 7px}
.highlight-bottom{display:flex;align-items:center;justify-content:space-between}
.change{font-size:9px;color:var(--green);font-weight:500}
.change.negative{color:var(--red)}
.mini-spark{width:64px;height:25px;overflow:visible}
.work-grid{display:grid;grid-template-columns:minmax(0,1fr) 278px;gap:20px;margin-bottom:25px}
.panel{background:white;border:1px solid var(--line);border-radius:13px;min-width:0}
.chart-panel{padding:22px 23px 0;overflow:hidden}
.chart-top{display:flex;justify-content:space-between;gap:12px;align-items:center}
.selected-coin{display:flex;gap:11px;align-items:center}
.selected-coin>.coin-icon{width:36px;height:36px;font-size:25px}
.selected-coin strong{display:block;font:700 14px var(--heading);margin-bottom:4px}
.selected-coin small{font-size:9px;color:#a3a7ae}
.chart-selector{display:flex;align-items:center;background:white;border:1px solid var(--line);border-radius:6px;padding:6px 8px;color:#747b83;font-size:9px;gap:9px}
.chart-selector svg{width:11px;height:11px}
.chart-price-row{display:flex;align-items:center;justify-content:space-between;gap:15px;margin-top:20px}
.chart-price{font:700 27px var(--heading);letter-spacing:-.8px}
.chart-price .change{font:500 10px var(--body);display:inline-block;margin-left:8px;letter-spacing:0}
.chart-subtitle{font-size:9px;color:#a5aab0;margin-top:6px}
.period-tabs{display:flex;gap:3px;background:#f8f9fa;padding:3px;border-radius:6px}
.period-tabs button{background:transparent;color:#91979e;font-size:9px;border-radius:4px;padding:6px 9px}
.period-tabs button.active{background:white;box-shadow:0 1px 5px #0000000a;color:#d37b59}
.chart-area{position:relative;height:205px;margin-top:20px;cursor:crosshair}
.main-chart{width:100%;height:100%;overflow:visible}
.chart-grid{stroke:#eef0f3;stroke-dasharray:3 5;stroke-width:1}
.chart-line{fill:none;stroke:#ed9876;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}
.chart-axis{fill:#aeb3ba;font-size:10px;font-family:var(--body)}
.chart-fill{fill:url(#chart-fill)}
.chart-tooltip{pointer-events:none;position:absolute;top:5px;left:10px;background:#2b3035;color:#fff;padding:8px 11px;border-radius:6px;font-size:10px;box-shadow:0 3px 12px #00000010;white-space:nowrap}
.chart-source{font-size:8px;color:#adb2b9;display:flex;justify-content:space-between;border-top:1px solid #f2f3f5;padding:13px 0;margin-top:5px}
.trade-panel{padding:21px 20px;display:flex;flex-direction:column}
.panel-heading{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px}
.practice-pill{color:#b28f6e;background:#faf4ec;border:1px solid #f3eadd;border-radius:4px;font-size:7px;font-weight:600;letter-spacing:.7px;padding:4px 6px}
.trade-tabs{display:grid;grid-template-columns:1fr 1fr;background:#f7f8f9;padding:4px;border-radius:8px;margin-bottom:19px}
.trade-tabs button{padding:8px 10px;color:#8e969d;background:transparent;border-radius:5px;font-size:10px;font-weight:600}
.trade-tabs button.active{background:white;color:var(--green);box-shadow:0 1px 5px #00000008}
.trade-tabs button.sell.active{color:var(--red)}
.field-label{font-size:9px;color:#9aa0a7;display:flex;justify-content:space-between;margin-bottom:8px}
.order-field{display:flex;align-items:center;gap:8px;background:#fbfbfc;border:1px solid #e9ecf0;border-radius:7px;padding:11px 10px;margin-bottom:15px}
.order-field select{width:100%;border:0;background:transparent;font-size:10px;font-weight:500;color:#5b626b;outline:none}
.order-field input{min-width:0;width:100%;border:0;background:transparent;outline:none;font-size:12px;color:#454d57}
.order-field input::placeholder{color:#aab0b8}
.order-field>span{color:#a0a5ab;font-size:9px;white-space:nowrap}
.quantity-presets{display:flex;gap:6px;margin-top:-7px;margin-bottom:20px}
.quantity-presets button{flex:1;background:#f6f7f8;border:1px solid #eff1f3;border-radius:4px;color:#9ca2a9;padding:5px 0;font-size:8px}
.quantity-presets button:hover{color:var(--orange);border-color:#f4c2ad}
.order-summary{display:flex;flex-direction:column;gap:10px;margin:0 0 17px}
.order-summary>div{display:flex;justify-content:space-between;gap:6px;font-size:9px;color:#9ca2aa}
.order-summary strong{font-weight:500;color:#616971}
.trade-submit{width:100%;padding:11px;margin-top:auto;font-size:11px}
.trade-submit svg{width:13px}
.trade-footnote{text-align:center;font-size:8px;color:#b0b5bc;line-height:1.7;margin:10px 0 0}
.form-message{font-size:11px;line-height:1.6;color:var(--red);min-height:0;margin:8px 0}
.form-message.success{color:var(--green)}
.market-panel{margin-bottom:23px;overflow:hidden}
.market-panel-header{display:flex;justify-content:space-between;gap:15px;align-items:center;padding:22px 23px 17px}
.market-panel-header h2{font:700 14px var(--heading);margin:0 0 5px}
.market-panel-header p{font-size:9px;color:#a4a9af;margin:0}
.market-tools{display:flex;align-items:center;gap:14px}
.market-filter{display:flex;gap:15px}
.market-filter button{font-size:9px;color:#a5aab1;background:transparent;padding:6px 0}
.market-filter button.active{color:#d98260;border-bottom:1px solid #ed9470}
.search-field{display:flex;align-items:center;gap:5px;border:1px solid #edf0f2;border-radius:6px;padding:8px 10px;max-width:150px}
.search-field svg{width:13px;height:13px;color:#b0b6be}
.search-field input{width:100%;border:0;outline:none;font-size:9px;color:#68717b;min-width:0;background:transparent}
.search-field input::placeholder{color:#aeb4bb}
.table-scroll{overflow-x:auto}
table{border-collapse:collapse;width:100%;white-space:nowrap;text-align:left}
th{font-size:8px;font-weight:500;letter-spacing:.2px;color:#a3a9b0;background:#fcfcfd;padding:12px 17px;border-block:1px solid #f1f3f5}
th button{font-size:inherit;color:inherit;background:none;padding:0}
td{padding:13px 17px;border-bottom:1px solid #f1f3f5;font-size:10px;color:#656d77}
th:first-child,td:first-child{padding-left:22px;width:40px;padding-right:0}
tbody tr:last-child td{border-bottom:0}
tbody tr:hover{background:#fcfcfd}
.coin-cell{display:flex;align-items:center;gap:9px;min-width:135px}
.coin-cell strong{font-size:10px;color:#4a515a;font-weight:600}
.coin-cell small{font-size:8px;color:#a3a9b1;margin-left:7px}
.table-price{font-family:var(--heading);font-weight:650;color:#515963;font-size:11px}
.star-button{background:transparent;color:#cbd0d6;padding:4px}
.star-button svg{width:13px;height:13px}
.star-button.saved{color:#d9a35f}
.star-button.saved svg{fill:#eac79355}
.trade-link{border:1px solid #e9ecef;border-radius:5px;padding:6px 11px;font-size:9px;color:#7c858e;background:white}
.trade-link:hover{color:#d98260;border-color:#edc5b4;background:#fffaf7}
.market-panel-footer{border-top:1px solid var(--line);padding:13px 23px;display:flex;justify-content:space-between;align-items:center;font-size:8px;color:#a6acb3}
.text-button{background:transparent;color:#cc8566;font-size:9px;padding:0;display:inline-flex;gap:8px;align-items:center}
.text-button svg{width:12px;height:12px}
.page-footer{display:flex;align-items:center;justify-content:space-between;gap:15px;color:#afb4bb;font-size:8px;padding:0 0 24px}
.page-footer>span:first-child{display:flex;align-items:center;gap:6px;color:#9ba2a9}
.brand-mini{font-size:15px;color:#b9a79b}
.inline-banner{padding:12px 16px;border:1px solid #ecd1bd;background:#fff8ed;color:#9c7857;border-radius:8px;font-size:11px;line-height:1.6;margin-bottom:20px}
.empty-state{padding:44px 24px;text-align:center;color:#969da5;font-size:12px;line-height:1.8}
.empty-state>svg{width:32px;height:32px;color:#d4b7a5;margin-bottom:14px}
.empty-state h3{font:650 18px var(--heading);color:#656d76;margin:0 0 9px}
.empty-state p{max-width:380px;margin:0 auto 18px}
.wallet-panel{padding:25px;margin-bottom:25px}
.wallet-metrics{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin:20px 0}
.wallet-metric{padding:23px;background:#f9fafb;border-radius:10px}
.wallet-metric small{display:block;color:#9ca3ab;font-size:11px;margin-bottom:12px}
.wallet-metric strong{font:700 27px var(--heading)}
.wallet-actions{display:flex;gap:12px;margin:20px 0}
.deposit-card{padding:20px;background:var(--bg);border:1px solid var(--line);border-radius:10px;margin-top:20px}
.deposit-card h3{font:700 15px var(--heading);margin:0 0 9px}
.deposit-card p{font-size:12px;line-height:1.7;color:#68727b;margin:0 0 16px;max-width:640px}
.deposit-address-row{display:flex;align-items:center;flex-wrap:wrap;gap:12px}
.deposit-address-row code{flex:1 1 250px;min-width:0;overflow-wrap:anywhere;user-select:all;font-size:13px;line-height:1.7;color:var(--ink)}
.deposit-address-row button{flex-shrink:0}
.holdings-table{margin-top:25px}
.settings-panel{padding:30px;max-width:680px;margin-bottom:25px}
.settings-panel h2{font:700 18px var(--heading);margin:0 0 9px}
.settings-panel>p{font-size:12px;color:#929aa3;line-height:1.8}
.settings-form{margin:25px 0}
.settings-form label{display:block;margin-bottom:18px;color:#68727b;font-size:11px}
.settings-form input{display:block;margin-top:7px;padding:12px;border:1px solid #e4e8ed;border-radius:7px;width:100%;background:#fcfcfd;outline:none}
.settings-divider{border:0;border-top:1px solid var(--line);margin:25px 0}
.settings-email{font-size:13px;color:#67717a;overflow-wrap:anywhere}
.mobile-nav{display:none}
dialog{border:1px solid #ececf0;border-radius:18px;color:var(--ink);box-shadow:0 25px 120px #11182720;padding:40px;width:min(440px,calc(100% - 30px));max-height:90dvh;overflow:auto}
dialog::backdrop{background:#1b222970;backdrop-filter:blur(5px)}
.dialog-close{position:absolute;right:14px;top:14px}
.auth-brand{display:flex;align-items:center;font:700 17px var(--heading);margin-bottom:30px}
.auth-brand .brand-mark{width:30px;height:32px;font-size:23px}
.auth-eyebrow{font-size:8px;letter-spacing:1.5px;color:#b09685}
.auth-dialog h2{font:750 30px var(--heading);letter-spacing:-1px;margin:12px 0}
.auth-dialog>p{font-size:12px;color:#969da5;line-height:1.7}
.auth-tabs{display:flex;background:#f5f6f8;padding:4px;border-radius:8px;margin:25px 0}
.auth-tabs button{flex:1;background:transparent;color:#8e969e;font-size:11px;padding:10px;border-radius:6px}
.auth-tabs button.active{background:white;color:#9c755f;box-shadow:0 1px 5px #00000008}
.auth-dialog label{display:block;font-size:11px;color:#7c858f;margin:17px 0}
.auth-dialog input{display:block;border:1px solid #e8ebef;background:#fcfcfd;border-radius:7px;padding:13px;width:100%;margin-top:8px;outline:none;font-size:12px;color:var(--ink)}
.auth-dialog input:focus,.settings-form input:focus{border-color:#e9b598;box-shadow:0 0 0 3px #fff4eb}
.password-field{display:flex;align-items:center;position:relative}
.password-field input{padding-right:42px}
.password-field button{position:absolute;right:10px;top:20px;background:transparent;color:#aab1b8}
.password-field svg{width:17px}
.forgot-button{display:block;margin-left:auto}
.auth-submit{width:100%;margin-top:15px;justify-content:space-between}
.auth-security{display:flex;align-items:center;gap:7px;justify-content:center;margin-top:25px;color:#969e9c;font-size:10px}
.auth-security svg{width:13px;height:13px}
.auth-dialog .auth-disclaimer{font-size:9px;text-align:center;color:#b0b5bb;margin:18px 0 0}
.info-dialog h2{font:700 23px var(--heading);letter-spacing:-.7px}
.info-dialog p{line-height:1.8;color:#89929b;font-size:12px;margin-bottom:25px;white-space:pre-line}
.info-symbol{color:#d79a78}
.info-symbol svg{width:32px;height:32px}
.toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%);display:flex;gap:10px;align-items:center;background:#303a37;color:#edf3ef;padding:14px 21px;border:1px solid #4b5751;border-radius:10px;box-shadow:0 7px 30px #00000012;z-index:20;font-size:12px;max-width:calc(100% - 32px)}
.toast svg{color:#b3c9ba;width:16px}
.data-notice{font-size:9px;color:#b2997e;background:#fcf9f4;padding:9px 22px;border-bottom:1px solid #f5ede1;display:flex;justify-content:space-between;gap:15px;line-height:1.6}
.skeleton{background:linear-gradient(90deg,#f4f5f7,#ebedf0,#f4f5f7);background-size:200% 100%;animation:shimmer 1.5s infinite;border-radius:5px;height:15px;display:inline-block;width:80px}
@keyframes shimmer{to{background-position:-200% 0}}
.enter{animation:enter .35s both}
@keyframes enter{from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)}}
@media(min-width:1600px){main{padding:45px 50px 0}.topbar{padding-inline:50px}.chart-area{height:265px}.trade-panel{padding:25px}.work-grid{grid-template-columns:minmax(0,1fr) 320px}.balance-card{padding:27px 30px}.market-highlights{padding:24px 28px}.highlight-grid{margin-top:30px}.highlight-price{font-size:24px}}
@media(max-width:1200px){.app-shell{grid-template-columns:200px minmax(0,1fr)}.sidebar{width:200px;padding-inline:15px}.brand{font-size:20px;margin-inline:0}.brand-mark{width:30px;height:32px;font-size:24px}.workspace{gap:7px;padding-inline:3px;font-size:10px}.workspace small{font-size:9px}.workspace-icon{width:25px}.workspace>span:last-child{display:none}.nav-link{padding-inline:12px}.sidebar-user{gap:6px}.user-copy small{font-size:7px}.user-copy strong{max-width:100px}.sidebar-user .icon-button{width:20px}.practice-note{padding:16px 12px;margin-inline:0}.nav-link.active:before{left:-15px}.topbar{padding-inline:25px}.top-actions{gap:15px}main{padding:29px 25px 0}.highlight{padding-inline:10px}.highlight-price{font-size:16px}.highlight-bottom .mini-spark{width:45px}.market-highlights{padding:21px 18px}.work-grid{grid-template-columns:minmax(0,1fr) 250px;gap:17px}.chart-panel{padding:20px 18px 0}.trade-panel{padding:20px 17px}.summary-grid{gap:17px}.balance-value{font-size:30px}.chart-price{font-size:24px}.chart-price .change{font-size:9px}.period-tabs button{padding:6px}.market-tools{gap:11px}.market-filter{gap:10px}.market-panel-header{padding-inline:20px}.search-field{max-width:125px}.hide-medium{display:none}}
@media(max-width:1000px){.app-shell{grid-template-columns:175px minmax(0,1fr)}.sidebar{width:175px;padding-inline:13px}.brand{font-size:18px}.brand-mark{width:27px;height:29px;font-size:22px;margin-right:7px}.workspace{font-size:9px}.workspace small{font-size:8px}.workspace-icon{display:none}.nav-link{font-size:11px;gap:9px}.nav-link svg{width:17px}.sidebar-user .user-copy small{display:none}.user-copy strong{max-width:80px;font-size:10px}.sidebar-user .avatar{width:25px;height:25px}.practice-note strong{font-size:11px}.practice-note button{font-size:9px}.practice-note p{font-size:9px}.topbar{height:72px;padding-inline:20px}.top-actions{gap:10px}.market-status{font-size:8px}.breadcrumb{gap:12px}.summary-grid{grid-template-columns:1fr}.market-highlights{padding:18px 22px}.highlight-grid{margin-top:18px}.highlight-price{font-size:21px}.highlight-bottom .mini-spark{width:80px}.balance-bottom{margin-top:15px}.balance-card{min-height:178px}.summary-grid{grid-template-columns:1fr 1.25fr}.highlight-grid{grid-template-columns:1fr}.highlight{display:grid;grid-template-columns:1fr auto;padding:8px 0;border:0;border-bottom:1px solid var(--line);align-items:center;gap:7px}.highlight:first-child{padding-top:0}.highlight:last-child{padding-bottom:0}.highlight-price{margin:0;font-size:15px}.highlight-bottom{display:none}.highlight .coin-icon{width:19px;height:19px;font-size:13px}.highlight-grid{margin-top:16px}.highlight .coin-heading{font-size:9px}.highlight .coin-heading small{display:none}.market-highlights{padding:19px}.work-grid{grid-template-columns:minmax(0,1fr)}.trade-panel{display:none}.trade-page .trade-panel{display:flex}.trade-page .work-grid{grid-template-columns:minmax(0,1fr)}.trade-page .chart-area{height:240px}.trade-page .trade-panel{max-width:none}.trade-page .trade-form{display:grid;grid-template-columns:1fr 1fr;gap:10px 20px}.trade-page .trade-form>div:last-child{grid-column:1/-1}.market-panel-header{align-items:flex-start}.market-tools{flex-direction:column;align-items:flex-end}.market-filter{gap:14px}.page-heading p{font-size:10px}.heading-end{display:none}.eyebrow{font-size:7px}.page-footer>span:first-child{display:none}}@media(max-width:700px){.app-shell{display:block}.sidebar{display:none}.content-shell{width:100%}.topbar{height:65px;padding:0 20px}.breadcrumb svg{color:var(--orange)}.top-actions{gap:8px}.market-status{font-size:8px}.top-divider{display:none}.top-actions>.icon-button{display:none}.account-label{font-size:10px}.account-button{gap:6px}.top-actions .avatar{width:28px;height:28px}.top-actions .account-button>svg{display:none}main{padding:25px 18px 72px}.page-heading{margin-bottom:22px}.eyebrow{font-size:6.5px;letter-spacing:1.4px}h1{font-size:28px}.page-heading p{font-size:10px;line-height:1.7}.summary-grid{gap:13px;margin-bottom:19px;grid-template-columns:1fr}.balance-card{padding:23px;min-height:185px}.balance-value{font-size:34px}.balance-bottom{margin-top:23px}.market-highlights{padding:20px}.highlight-grid{grid-template-columns:repeat(3,1fr);gap:0}.highlight{display:block;border-bottom:0;border-right:1px solid var(--line);padding:0 12px}.highlight:first-child{padding-left:0}.highlight:last-child{padding-right:0}.highlight .coin-heading{font-size:9px}.highlight-price{font-size:16px;margin-top:10px}.highlight-bottom{display:flex;margin-top:7px}.highlight-bottom .mini-spark{width:40px}.work-grid{gap:18px;margin-bottom:19px}.chart-panel{padding:20px 17px 0}.chart-price{font-size:25px}.chart-price .change{font-size:9px}.chart-price-row{align-items:flex-start}.chart-subtitle{font-size:8px}.period-tabs{margin-top:3px}.period-tabs button{font-size:8px;padding:6px}.chart-area{height:195px}.chart-top{gap:7px}.selected-coin strong{font-size:13px}.market-panel-header{padding:19px 16px;gap:10px}.market-panel-header h2{font-size:13px}.market-panel-header p{font-size:8px;max-width:170px;line-height:1.6}.market-filter{gap:10px}.market-filter button{font-size:8px}.search-field{max-width:120px;padding:7px 8px}.market-panel-footer{padding-inline:16px;font-size:7px}.hide-mobile{display:none}th{font-size:7px;padding:11px}td{padding:13px 10px}.coin-cell{min-width:107px;gap:7px}.coin-cell .coin-icon{width:25px;height:25px;font-size:16px}.coin-cell strong{font-size:9px}.coin-cell small{display:block;margin:3px 0 0;font-size:7px}.table-price{font-size:10px}.market-panel th:first-child,.market-panel td:first-child{padding-left:10px;width:24px}.star-button{padding:2px}.change{font-size:8px}.market-panel .trade-link{padding:5px 7px;font-size:8px}.market-panel .mini-spark{width:45px;height:21px}.mobile-nav{position:fixed;bottom:0;left:0;right:0;background:#ffffffed;backdrop-filter:blur(15px);border-top:1px solid #e7eaee;display:flex;justify-content:space-around;padding:9px 7px calc(9px + env(safe-area-inset-bottom));z-index:8}.mobile-nav button{background:transparent;display:flex;align-items:center;flex-direction:column;gap:5px;font-size:8px;color:#a3aab2;min-width:50px;padding:4px}.mobile-nav button svg{width:19px;height:19px}.mobile-nav button.active{color:#d78360}.page-footer{padding:0;gap:6px;font-size:7px;flex-wrap:wrap;justify-content:center;line-height:1.8}.page-footer>span:last-child{display:none}.toast{bottom:85px;font-size:11px}.wallet-panel{padding:21px}.wallet-metrics{gap:10px}.wallet-metric{padding:17px 13px}.wallet-metric strong{font-size:20px}.wallet-metric small{font-size:9px}.wallet-actions .primary-button,.wallet-actions .secondary-button{font-size:10px}.settings-panel{padding:22px}.data-notice{padding:9px 16px;font-size:8px}.data-notice>span:last-child{display:none}.trade-page .trade-form{display:block}.trade-page .chart-area{height:195px}dialog{padding:30px 25px}.auth-dialog h2{font-size:27px}.summary-grid,.work-grid,.market-panel{animation:enter .4s both}.market-panel{animation-delay:.1s}}@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}
.balance-meta .positive{display:inline-flex;align-items:center;gap:4px;white-space:nowrap}.balance-meta .positive svg{width:10px;height:10px}.chart-source svg{width:11px;height:11px}.balance-meta{flex-wrap:wrap;line-height:1.6}.chart-price-row{flex-wrap:wrap}.auth-dialog input:disabled{cursor:default}@media(max-width:700px){.star-button{min-width:28px;min-height:32px}.trade-link{min-height:32px}.primary-button,.settings-form input,.order-field{min-height:44px}.period-tabs button{min-height:30px}.market-filter button{min-height:28px}.chart-top .chart-selector{min-height:32px}}
.wallet-actions{flex-wrap:wrap}.settings-shortcuts{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:28px}@media(max-width:700px){.coin-cell strong{font-size:10px}.table-price{font-size:11px}.coin-cell small{font-size:8px}.change{font-size:9px}.market-filter button{font-size:9px}.market-panel-header p{font-size:9px}.chart-subtitle,.chart-source{font-size:9px}.page-heading p{font-size:11px}.trade-footnote{font-size:9px}.field-label,.order-summary>div{font-size:10px}}
