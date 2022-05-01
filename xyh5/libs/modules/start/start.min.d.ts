declare class WeatherBase {
    _runing: boolean;
    _first: boolean;
    timerFrame: number;
    index: number;
    imageList: egret.Texture[];
    private m_Temp;

    constructor(t: any);

    playWeather(tex: egret.Texture[]): void;

    stopWeather(): void;

    weatherUpdateHandler(time: number): boolean;

    onWeatherInit(): void;

    onWeatherStart(): void;

    onWeatherUpdate(): void;

    onWeatherStop(): void;
}

declare class NoticeUI extends egret.DisplayObjectContainer {
    private bg;
    private m_Label;

    constructor();

    private onAddToStage(event);

    private UpdateNotice(data);

    private _OnClickClose();

    private Close();

    private onResize();
}

declare class GameServerData {
    static readonly PAGE_COUNT: number;
    static MaxId: number;
    static PageData: GameServerPageData[];
    static SelectData: GameServerDescData;
    static Callback: Function;
    static ThisObject: any;

    static HasRecentSvr(): boolean;

    static Init(maxId: number, datas: GameServerDescData[], lastList: GameServerDescData[]): void;

    static GetPageData(page: number): void;

    private static _DoPageData(page, event);
}

declare class GameServerPageData {
    index: number;
    name: string;
    datas: GameServerDescData[];
}

declare class GameServerDescData {
    id: number;
    name: string;
    ip: string;
    status: number;
    version: number;

    static Get(obj: any, ignore?: boolean): GameServerDescData;

    GetStatus(): number;

    CanEnter(): boolean;
}

declare class HttpHelper {
    private static m_Set;

    static GetPlayerServerInfo(token: string, callback: Function, thisObject: any): void;

    static GetServerList(page: number, callback: Function, thisObject: any): void;

    static GetRandomName(serverid: number, sex: number, callback: Function, thisObject: any): void;

    static CheckName(serverid: number, name: string, callback: Function, thisObject: any): void;

    static GetNotice(callback: Function, thisObject: any): void;

    static SendPoint(point: number): void;

    private static Error();
}

declare class LoadingUI extends egret.DisplayObjectContainer {
    private m_Textures;
    private bg;
    private blackBg;
    private m_Label;
    private tipx1;
    private tipx2;
    private tipImg;
    private img01;
    private img01Tag;
    private img01W;
    private img02;
    private img02Tag;
    private img02W;
    private label03;
    private imgWidth;
    private str;
    private s1;
    private e1;
    private s2;
    private e2;
    private t;
    private et;
    private pt;
    private preveTime;
    private mt;

    constructor();

    Close(): void;

    UpdateText(str: string, p1: number, p2: number, time: number): void;

    SetText(str: string, p1: number, p2: number, time: number): void;

    getElasticOut(t: number): number;

    sineOut(t: number): number;

    private NewBar(y);

    private onAddToStage(event);

    private SetBarValue(bar, value, tag);

    private _LoadTexture(index);

    private _Loaded(obj, name);

    private Update(time);

    private _OnClick();

    private _UpdatePro(value);

    private onResize();
}

declare class LoginUI extends egret.DisplayObjectContainer {
    private m_Label;
    private m_NewServerLabel;

    constructor();

    Close(): void;

    SetCurServerName(): void;

    private NewServerBg();

    private NewSelServerBg();

    private NewStarBtn();

    private onAddToStage(event);

    private _OnClickNotice();

    private _OnClickServer();

    private _OnClickLogin();
}

declare class Main extends egret.DisplayObjectContainer {
    static Instance: Main;
    mLoadResGroup01: {};
    mLoadResGroup02: {
        "_ui_cjjs_bm_ditu": string;
    };
    mLoadResGroup03: {
        "_notice_res": string;
    };
    mLoadResGroup04: {
        "_notice_res": string;
    };
    mLoadResGroup05: {
        "ui_xzfwq_p_show": string;
    };
    mToken: string;
    playerServerData: GetPlayerServerInfoData;
    mConnectServerData: GameServerDescData;
    mCreateRoleData: {
        crn: string;
        crji: number;
    };
    UserName: string;
    NoticeStatus: number;
    GmLevel: number;
    lid: string;
    mUIGroupYPos: number;
    private sheet;
    private m_CurLoadGroup;
    private m_CreateRoleData;
    private m_UIGroup;
    private m_NextStepType;
    private m_CreateRolViewData;
    private m_BGImg;
    private m_LoadingImg;
    private m_TimeOutId;
    private m_HasLoading;
    private m_ConCallback;

    constructor();

    static $GetThmPath(str: string, thmId: number): string;

    static closesocket(): void;

    ShowServerUI(): void;

    ShowNoticeUI(): void;

    ShowCreateUI(data: GameServerDescData): void;

    UpdateLoadingUI(isUpdate: boolean, str: string, p1: number, p2: number, time: number): void;

    ShowLoadingUI(): void;

    ShowGame(): void;

    ConnectServer(serverData: GameServerDescData, callback: Function): void;

    StartLoadGame(serverData: GameServerDescData): void;

    SocketUpdateState(state: number): void;

    GetImg(name: string): egret.Texture;

    GetSingleImg(name: string): egret.Texture;

    private onAddToStage(event);

    private _DoGetPlayerServerInfo(event);

    private _DoParsePlayerServerInfo(infostr);

    private _SetNextStep(step);

    private _LoadSheet(jsonName);

    private _LoadGroup(group);

    private _CheckUI(name);

    private DoShowLoadingImg();

    private ShowLoadingImg();

    private UpdateLoadingImgAnim(timeStamp);

    private HideLoadingImg();

    private onResize();

    private _CloseView(view);

    private _CheckServerState(serverData);

    private _ClearConData();

    private _OnLoadItem(obj, name);

    private _CreateScene();

    /**
     * 创建游戏场景
     */
    private CreateGameScene(nextType);
}

interface GetPlayerServerInfoData {
    data: {
        player: {
            username: string;
            gm_level: number;
            lid: string;
        };
        maxid: number;
        ns: number;
        lpage: {
            version: number;
            status: number;
            sid: number;
            addr: string;
        }[];
        recent: {
            job: number;
            sex: number;
            name: string;
            time: number;
            status: number;
            sid: number;
            version: number;
            addr: string;
        }[];
    };
    result_msg: string;
    status_msg: string;
    status: number;
    result: number;
}

declare class TestScreenAdapter extends egret.HashObject implements egret.sys.IScreenAdapter {
    /**
     * @private
     * 计算舞台显示尺寸
     * @param scaleMode 当前的缩放模式
     * @param screenWidth 播放器视口宽度
     * @param screenHeight 播放器视口高度
     * @param contentWidth 初始化内容宽度
     * @param contentHeight 初始化内容高度
     */
    calculateStageSize(scaleMode: string, screenWidth: number, screenHeight: number, contentWidth: number, contentHeight: number): egret.sys.StageDisplaySize;
}

declare class CreateRoleUI extends egret.DisplayObjectContainer {
    private m_ServerData;
    private m_Textures;
    private m_IsRandom;
    private m_TweenList;
    private m_Random;
    private m_GoBtn;
    private m_TextField;
    private m_CurImgIndex;
    private m_Index;
    private m_Job;
    private m_Sex;
    private timeLabel;
    private sex1;
    private sex2;
    private sel1;
    private sel2;
    private roleGroup0;
    private roleGroup1;
    private roleImg0;
    private roleImg1;
    private mSelImg;
    private time;
    private m_CheckName;
    private m_CheckIndex;
    private m_LastTime;

    constructor(serverData: GameServerDescData);

    static circOut(t: number): number;

    private static SetDownState(obj);

    private m_CreateThm1();

    private AddSelGroup();

    private onAddToStage(event);

    private _DoFocus();

    private UpdateIndex(value);

    private DoRandom();

    private _DoRandom();

    private _DoGo();

    private SendPoint(point);

    private _Go(data);

    private _DoRandomName(data);

    private Select(index);

    private UpdateSel();

    private _LoadTexture(index);

    private _Loaded(obj, name);

    private Close();

    private AddTween(target, prop, duration);

    private Update(timeStamp);
}

declare class ServerUI extends egret.DisplayObjectContainer {
    static COLOR: number;
    private bg;
    private m_LeftScrollView;
    private m_RightScrollView;
    private PlayerInfo;

    constructor();

    static IsNewServer(serverId: number): boolean;

    private onAddToStage(event);

    private DoServerData(page);

    private Close();

    private _LeftClick(index);

    private _RightClick(index);

    private _OnClickClose();

    private onResize();
}

declare class ServerScrollView {
    private m_ScrollView;
    private m_Group;
    private m_ItemCls;
    private m_CacheList;
    private m_Datas;
    private m_Click;
    private m_ThisObject;
    private m_Index;

    constructor(scrollView: egret.ScrollView, itemCls: any, clickFunc: Function, thisObject: any);

    GetSelectIndex(): number;

    SelectIndex(index: number): void;

    GetData(index: number): any;

    SetDatas(datas: any[]): void;

    private GetItme();

    private OnChange();

    private _ItemClick(e);

    private _AddItem(index, forward);
}

declare class ServerGroup extends egret.DisplayObjectContainer {
    constructor();

    $hitTest(stageX: number, stageY: number): egret.DisplayObject;
}

declare class ServerUIItem1 extends egret.DisplayObjectContainer {
    static Width: number;
    static Height: number;
    light: egret.Bitmap;
    itemIndex: number;
    private label;

    constructor();

    SetData(data: GameServerPageData): void;
}

declare class ServerUIItem2 extends egret.DisplayObjectContainer {
    static Width: number;
    static Height: number;
    itemIndex: number;
    flagImg: egret.Bitmap;
    hotImg: egret.Bitmap;
    headImg: egret.Bitmap;
    Desc: GameServerDescData;
    playername: egret.TextField;
    kuangImg: egret.Bitmap;
    private label;

    constructor();

    SetData(data: GameServerDescData): void;

    SetHeadData(): void;
}

declare class Socket {
    /** 连接中 */
    static STATUS_CONNECTING: number;
    /** 检验中 */
    static STATUS_CHECKING: number;
    /** 连接生效 */
    static STATUS_COMMUNICATION: number;
    /** 关闭连接 */
    static STATUS_DISCONNECT: number;
    static ins: () => Socket;
    private static _ins;
    UpdateStateEvent: Function;
    _host: string;
    _port: number;
    proxy: {
        onSocketConnected: Function;
        onSocketRead: Function;
        onSocketClose: Function;
        onFinishCheck: Function;
    };
    readonly connected: boolean;
    private _socketStatus;
    private socket_;
    private recvPack;
    private m_PreHeartBeat;
    private m_ServerTimeCounter;
    private m_HeartBeat;

    constructor();

    newSocket(): void;

    connectError(): void;

    connect(host: string, port: number): void;

    close(): void;

    GetSocketState(): number;

    onSocketConnected(e: any): void;

    onSocketRead(e: any): void;

    onSocketClose(e: any): void;

    updateStatus(status: any): void;

    onFinishCheck(newStatus: any, oldStatus: any): void;

    sendPack(pack: any): void;

    private Connect(host, port);

    private _SendHeartBeat(time);
}

declare class WindowData {
    private static m_IsShow;
    private static _IsFullScreen;

    static ShowFps(): void;

    static _LoginToken(callback: Function): void;

    static _GetServerAddr(): string;

    static _GetBGImg(): string;

    static _GetStartType(): number;

    static _GetCenterAddr(): string;

    static _GetResAddr(): string;

    static _GetStartResAddr(): string;

    static _GetPlatformId(): number;

    static _MainCls(): string;

    static _DirectLogin(): boolean;

    static _GetServerName(serverId: number): string;

    static StartLoading(): void;

    static RemoveBg(): void;

    static IsHttps(): boolean;

    static HttpsPort(): string;

    static HttpPort(): string;

    /***是否支持全屏 */
    static IsFullScreen(): boolean;

    static Has(value: number, bit: number): boolean;

    static GetThmType(): number;

    static GetDefaultSel(): number;

    private static HasClientConfig(index);
}

declare class RainLine extends egret.Bitmap {
    autoRotation: boolean;
    sptx: number;
    speedx: number;
    speedy: number;
    targety: number;
    sy: number;
    down: boolean;
    spt: number;
    touchEnabled: boolean;
    type: any;
    isDeath: any;
    sScale: number;
    rotationPlus: number;

    update(): any;
}

declare class Base64 {
    static _keyStr: string;

    static encode(input: any): string;

    static decode(input: any): string;

    static _utf8_encode(string: any): string;

    static _utf8_decode(utftext: any): string;
}

declare class WeatherFactory {
    static _weatherFlower: any;
    static enabled: boolean;
    static weatherFBList: any[];
    static weatherSceneList: any[];
    static weatherRunlist: {};

    static getFlower(): any;
}

declare class WeatherFlower extends WeatherBase {
    MAX_COUNT: number;
    r_P_List: RainLine[];
    r_R_List: any[];
    r_Max: number;
    r_L_Delay: number;
    r_L_Last_Time: number;
    r_R_Delay: number;
    r_R_Last_Time: number;
    s_C_Delay: number;
    s_C_Last_Time: number;
    timerFrame: number;
    stageTarget: any;
    _lastTime: any;

    constructor();

    setStageTarget(t: any): void;

    onWeatherStart(): void;

    onWeatherUpdate(): void;

    onWeatherStop(): void;

    private Remove(e);
}
