import * as React from 'react';
import styles from './AiRsikAssemnet10.module.scss';
import { IAiRsikAssemnet10Props } from './IAiRsikAssemnet10Props';

import Service from './Service';

import {Stack,IStackStyles} from 'office-ui-fabric-react'; 
import {PrimaryButton} from 'office-ui-fabric-react/lib/Button';
import { Dropdown,IDropdownStyles,IDropdownOption} from 'office-ui-fabric-react/lib/Dropdown';
import { PeoplePicker,PrincipalType } from "@pnp/spfx-controls-react/lib/PeoplePicker";
// import {Icon} from 'office-ui-fabric-react/lib/Icon';

const stackTokens = { childrenGap: 50 };
const stackStyles: Partial<IStackStyles> = { root: { padding: 10} };
//const sectionStackTokens: IStackTokens = { childrenGap: 10 };


let Bussinessowner='';
let Technicalowner='';
let myitemId='';
let ItemInfoStatus='';
let defaultUsers:string[]=[];
let defaultUsers1:string[]=[];

console.log(ItemInfoStatus);
console.log(Bussinessowner);
console.log(Technicalowner);


const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 300 },
};

const stackButtonStyles: Partial<IStackStyles> = { root: { width: 40 } };


export interface AIRiskAssement{

  ProjSystemName:any;
  ProjectClassListItems:any;
  ProjectClassListItemsSecII:any;
  ProjectClassListItemsSecIII:any;
  MyProjectClassVal:any;
  BussinessOwnerName:any;
  TechnicalOwnerName:any;
  uservalBusowner:any;
  userval1TechOwner:any;
  Purpose:any;
  GeographyListItems:any;
  MyGeographyVal:any;
  Listgoes:any;
  CapcoDomailListItems:any;
  MyCapcoDomainVal:any;
  Client:any;
  SalesId:any;
  ProjectStageListItems:any;
  MyProjectStage:any;
  ScopeofProject:any;
  NotScopeofProject:any;
  Evidenceofresearch:any;
  //SecII
  AIsystemcaptureSectionIIListItems:any;
  MyAISytemCaptureSectionIIVal:any;
  AISystemArgumenStectionIIListItems:any;
  MyAISystemArgumenStectionIIVal:any;
  ArumentSecIItxt:any;
 //Prohibited AI
  AIsystemCCTVfootageSectionIIListItems:any;
  MyAIsystemCCTVfootageSectionIIVal:any;
  AIsystemrelySectionIIListItems:any;
  MyAIsystemrelySectionIIVal:any;
  AISysteminferemotionsSectionIIListItems:any;
  MyAISysteminferemotionsSectionIIVal:any;
  AISystembiometricSectionIIListItems:any;
  MyAISystembiometricSectionIIVal:any;
  AIsystemriskassessmentsSectionIIListItems:any;
  MyAIsystemriskassessmentsSectionIIVal:any;
  AISystemSocialScoringsSectionIIListItems:any;
  MyAISystemSocialScoringsSectionIIVal:any;
  AISystemEngageSectionIIListItems:any;
  MyAISystemEngageSectionIIVal:any;
 AIsystemSignificantSectionIIListItems:any;
 MyAIsystemSignificantSectionIIVal:any;
AIsystemleagalSectionIIListItems:any;
MyAIsystemleagalSectionIIVal:any;
AIsysteminfluenceSectionIIListItems:any;
MyAIsysteminfluenceSectionIIVal:any;
AIsystemcriminalSectionIIListItems:any;
MyAIsystemcriminalSectionIIVal:any;
AIsystembiometricSectionIIListItems:any;
MyAIsystembiometricSectionIIVal:any;
AIsystemexploitSectionIIListItems:any;
MyAIsystemexploitSectionIIVal:any;
//End
//High Risk AI //Sec IV

MyProjectClassValText:any;

AIsystemindividualiseligibleIIListItemsSecIV:any;
MyAIsystemindividualiseligibleIIValSecIV:any;
AIsystemeducationevaluateprogressIIListItemsSecIV:any;
MyAIsystemeducationevaluateprogressIIValSecIV:any;
AIsystemassesseligibilityemploymentIIListItemsSecIV:any;
MyAIsystemassesseligibilityemploymentIIValSecIV:any;
AIsystemprofileindividualsIIListItemsSecIV:any;
MyAIsystemprofileindividualsIIValSecIV:any;
AIsystemoperatecontrolrobotsIIListItemsSecIV:any;
MyAIsystemoperatecontrolrobotsIIValSecIV:any;
AIsystemtrainedthirdpartyrestrictedIIListItemsSecIV:any;
MyAIsystemtrainedthirdpartyrestrictedIIValSecIV:any;
AIsystemdecisionscontrolactionssignificantlyIIListItemsSecIV:any;
MyAIsystemdecisionscontrolactionssignificantlyIIValSecIV:any;
AIsystemdividualsconcerninghighlysensitiveIIListItemsSecIV:any;
MyAIsystemdividualsconcerninghighlysensitiveIIValSecIV:any;
AIsystemcriticaloperatingessentialinfrastructureIIListItemsSecIV:any;
MyAIsystemcriticaloperatingessentialinfrastructureIIValSecIV:any;
AIsystemincreasedsignificantnegativeIIListItemsSecIV:any;
MyAIsystemincreasedsignificantnegativeIIValSecIV:any;
AIsystemleadsignificantfinanciallossesIIListItemsSecIV:any;
MyAIsystemleadsignificantfinanciallossesIIValSecIV:any;
AIsystemimpactCapcosapplicablelawsIIListItemsSecIV:any;
MyAIsystemimpactCapcosapplicablelawsIIValSecIV:any;
AIcomponentrepresentsignificantinvestmentIIListItemsSecIV:any;
MyAIcomponentrepresentsignificantinvestmentIIValSecIV:any;
AIsystemsuggestinherenthighrisksIIListItemsSecIV:any;
MyAIsystemsuggestinherenthighrisksIIValSecIV:any;
AISystemdeployedListItemsSecIV:any;
MyAISystemdeployedSecIV:any;
AISystemHighRiskListItemsSecIV:any;
MyMyAIISystemHighRiskSecIV:any;
//End

//Sec V

AIsystemGenerativeListItemsSecV:any;
MyAIsystemGenerativeSecV:any;
AIprojectListItemsSecV:any;
MyAIprojectSecV:any;
AIArchitectureListItemsSecV:any;
MyAIArchitectureSecV:any;
AISharepointListItemsSecV:any;
MyAISharepointSecV:any;
MyBusinessUseCaseSecV:any;
MyAIprojectArchitecureCaseSecV:any;
MySharepointCaseSecV:any;

//END

SecIVisble:boolean;
SecIIVisble:boolean;
SecIIIVisble:boolean;
SecIbuttonVisble:boolean;
SecIIbuttonVisble:boolean;
SecIIIbuttonVisble:boolean;
SecvVisble:boolean;
SecClosed:boolean;
//Sec II Text Values
MyAISytemCaptureSectionIIValtxt:any;
MyAISystemArgumenStectionIIValtxt:any;
MyAIsystemCCTVfootageSectionIIValtxt:any;
MyAIsystemrelySectionIIValtxt:any;
MyAISysteminferemotionsSectionIIValtxt:any;
MyAISystembiometricSectionIIValtxt:any;
MyAIsystemriskassessmentsSectionIIValtxt:any;
MyAISystemSocialScoringsSectionIIValtxt:any
MyAISystemEngageSectionIIValtxt:any;
MyAIsystemleagalSectionIIValtxt:any;
MyAIsysteminfluenceSectionIIValtxt:any;
MyAIsystemcriminalSectionIIValtxt:any;
MyAIsystembiometricSectionIIValtxt:any;
MyAIsystemexploitSectionIIValtxt:any;

//HIGH RISK

MyAIsystemindividualiseligibleIIValSecIVtxt:any;
MyAIsystemeducationevaluateprogressIIValSecIVtxt:any;
MyAIsystemassesseligibilityemploymentIIValSecIVtxt:any;
MyAIsystemprofileindividualsIIValSecIVtxt:any;
MyAIsystemoperatecontrolrobotsIIValSecIVtxt:any;
MyAIsystemtrainedthirdpartyrestrictedIIValSecIVtxt:any;
MyAIsystemdecisionscontrolactionssignificantlyIIValSecIVtxt:any;
MyAIsystemdividualsconcerninghighlysensitiveIIValSecIVtxt:any;
MyAIsystemcriticaloperatingessentialinfrastructureIIValSecIVtxt:any;
MyAIsystemincreasedsignificantnegativeIIValSecIVtxt:any;
MyAIsystemleadsignificantfinanciallossesIIValSecIVtxt:any;
MyAIsystemimpactCapcosapplicablelawsIIValSecIVtxt:any;
MyAIcomponentrepresentsignificantinvestmentIIValSecIVtxt:any;
MyAIsystemsuggestinherenthighrisksIIValSecIVtxt:any;
MyAISystemdeployedSecIVtxt:any;
MyAISharepointSecVtxt:any;
MyAIsystemGenerativetextSecV:any;
MyDescribewhatandhow:boolean;
BussinessownerEmailArray:any;
TechnicalOwnerEmailArray:any;
MyBussinessOwnerArray:any;
ListGoes:boolean;
MyGeographyValtext:any;

//END

SecIDisableAfterSave:boolean;
SecIIDisableAfterSave:boolean;
SecIIIfinalAfterSave:boolean;
ProjectClasssText:any;
GroupExsits1:boolean;
GroupExsits2:boolean;
showApprovalbuttons:boolean;
showApprovalbuttonsLevel2:boolean;
showRequestSectionIIIbutton:boolean;
showSecIIFinal:boolean;
ShowLastSubmit:boolean;
ShowCompleted:boolean;
MyProjectClassifications:string;
MySavedProjectClassVal:string;

//END


}



export default class AiRsikAssemnet10 extends React.Component<IAiRsikAssemnet10Props, AIRiskAssement> {

  public _service: any;
  public GlobalService: any;
  protected ppl:any;

  public constructor(props:IAiRsikAssemnet10Props) {
    super(props);

    this.state={

      ProjSystemName:null,
      ProjectClassListItems:[],
      ProjectClassListItemsSecII:[],
      ProjectClassListItemsSecIII:[],
      MyProjectClassVal:null,
      BussinessOwnerName:"",
      MyBussinessOwnerArray:[],
      TechnicalOwnerName:"",
      uservalBusowner:[],
      userval1TechOwner:[],
      Purpose:"",
      GeographyListItems:[],
      MyGeographyVal:null,
      Listgoes:null,
      CapcoDomailListItems:[],
      MyCapcoDomainVal:null,
      Client:null,
      SalesId:null,
      ProjectStageListItems:[],
      MyProjectStage:[],
      ScopeofProject:null,
      NotScopeofProject:null,
      Evidenceofresearch:null,
      MyProjectClassValText:"",

      //SecII

      AIsystemcaptureSectionIIListItems:[],
      MyAISytemCaptureSectionIIVal:"",
      AISystemArgumenStectionIIListItems:[],
      MyAISystemArgumenStectionIIVal:"",
      ArumentSecIItxt:"",


       //Prohibited AI

       AIsystemCCTVfootageSectionIIListItems:[],
       MyAIsystemCCTVfootageSectionIIVal:"",

       AIsystemrelySectionIIListItems:[],
       MyAIsystemrelySectionIIVal:"",

       AISysteminferemotionsSectionIIListItems:[],
       MyAISysteminferemotionsSectionIIVal:"",

       AISystembiometricSectionIIListItems:[],
       MyAISystembiometricSectionIIVal:"",

       AIsystemriskassessmentsSectionIIListItems:[],
       MyAIsystemriskassessmentsSectionIIVal:"",

       AISystemSocialScoringsSectionIIListItems:[],
       MyAISystemSocialScoringsSectionIIVal:"",

       AISystemEngageSectionIIListItems:[],
       MyAISystemEngageSectionIIVal:"",

AIsystemSignificantSectionIIListItems:[],
MyAIsystemSignificantSectionIIVal:"",

AIsystemleagalSectionIIListItems:[],
MyAIsystemleagalSectionIIVal:"",

AIsysteminfluenceSectionIIListItems:[],
MyAIsysteminfluenceSectionIIVal:"",

AIsystemcriminalSectionIIListItems:[],
MyAIsystemcriminalSectionIIVal:"",

AIsystembiometricSectionIIListItems:[],
MyAIsystembiometricSectionIIVal:"",

AIsystemexploitSectionIIListItems:[],
MyAIsystemexploitSectionIIVal:"",


//END

//HIGH RISK

AIsystemindividualiseligibleIIListItemsSecIV:[],
MyAIsystemindividualiseligibleIIValSecIV:"" ,

AIsystemeducationevaluateprogressIIListItemsSecIV:[],
MyAIsystemeducationevaluateprogressIIValSecIV:"" ,


AIsystemassesseligibilityemploymentIIListItemsSecIV:[],
MyAIsystemassesseligibilityemploymentIIValSecIV:"" ,

AIsystemprofileindividualsIIListItemsSecIV:[],
MyAIsystemprofileindividualsIIValSecIV:"" ,


AIsystemoperatecontrolrobotsIIListItemsSecIV:[],
MyAIsystemoperatecontrolrobotsIIValSecIV:"" ,

AIsystemtrainedthirdpartyrestrictedIIListItemsSecIV:[],
MyAIsystemtrainedthirdpartyrestrictedIIValSecIV:"" ,

AIsystemdecisionscontrolactionssignificantlyIIListItemsSecIV:[],
MyAIsystemdecisionscontrolactionssignificantlyIIValSecIV:"" ,


AIsystemdividualsconcerninghighlysensitiveIIListItemsSecIV:[],
MyAIsystemdividualsconcerninghighlysensitiveIIValSecIV:"" ,

AIsystemcriticaloperatingessentialinfrastructureIIListItemsSecIV:[],
MyAIsystemcriticaloperatingessentialinfrastructureIIValSecIV:"" ,

AIsystemincreasedsignificantnegativeIIListItemsSecIV:[],
MyAIsystemincreasedsignificantnegativeIIValSecIV:"",


AIsystemleadsignificantfinanciallossesIIListItemsSecIV:[],
MyAIsystemleadsignificantfinanciallossesIIValSecIV:"" ,


AIsystemimpactCapcosapplicablelawsIIListItemsSecIV:[],
MyAIsystemimpactCapcosapplicablelawsIIValSecIV:"" ,

AIcomponentrepresentsignificantinvestmentIIListItemsSecIV:[],
MyAIcomponentrepresentsignificantinvestmentIIValSecIV:"" ,

AIsystemsuggestinherenthighrisksIIListItemsSecIV:[],
MyAIsystemsuggestinherenthighrisksIIValSecIV:"",


AISystemdeployedListItemsSecIV:[],
MyAISystemdeployedSecIV:"",


AISystemHighRiskListItemsSecIV:[],
MyMyAIISystemHighRiskSecIV:"",
 

//SecV

AIsystemGenerativeListItemsSecV:[],
MyAIsystemGenerativeSecV:"",

AIprojectListItemsSecV:[],
MyAIprojectSecV:"",

AIArchitectureListItemsSecV:[],
MyAIArchitectureSecV:"",

AISharepointListItemsSecV:[],
MyAISharepointSecV:"",

MyBusinessUseCaseSecV:"",
MyAIprojectArchitecureCaseSecV:"",
MySharepointCaseSecV:"",

SecIIVisble:false,
SecIIIVisble:false,
SecIVisble:true,

SecIbuttonVisble:false,
SecIIbuttonVisble:false,
SecIIIbuttonVisble:false,
ShowCompleted:false,

//SecII text Values


MyAISytemCaptureSectionIIValtxt:"",
MyAISystemArgumenStectionIIValtxt:"",
MyAIsystemCCTVfootageSectionIIValtxt:"",
MyAIsystemrelySectionIIValtxt:"",
MyAISysteminferemotionsSectionIIValtxt:"",


MyAISystembiometricSectionIIValtxt:"",
MyAIsystemriskassessmentsSectionIIValtxt:"",
MyAISystemSocialScoringsSectionIIValtxt:"",
MyAISystemEngageSectionIIValtxt:"",
MyAIsystemleagalSectionIIValtxt:"",

MyAIsysteminfluenceSectionIIValtxt:"",
MyAIsystemcriminalSectionIIValtxt:"",
MyAIsystembiometricSectionIIValtxt:"",
MyAIsystemexploitSectionIIValtxt:"",

//HIGH RISK
MyAIsystemindividualiseligibleIIValSecIVtxt:"",
MyAIsystemeducationevaluateprogressIIValSecIVtxt:"",
MyAIsystemassesseligibilityemploymentIIValSecIVtxt:"",
MyAIsystemprofileindividualsIIValSecIVtxt:"",
MyAIsystemoperatecontrolrobotsIIValSecIVtxt:"",
MyAIsystemtrainedthirdpartyrestrictedIIValSecIVtxt:"",
MyAIsystemdecisionscontrolactionssignificantlyIIValSecIVtxt:"",
MyAIsystemdividualsconcerninghighlysensitiveIIValSecIVtxt:"",
MyAIsystemcriticaloperatingessentialinfrastructureIIValSecIVtxt:"",
MyAIsystemincreasedsignificantnegativeIIValSecIVtxt:"",
MyAIsystemleadsignificantfinanciallossesIIValSecIVtxt:"",
MyAIsystemimpactCapcosapplicablelawsIIValSecIVtxt:"",
MyAIcomponentrepresentsignificantinvestmentIIValSecIVtxt:"",
MyAIsystemsuggestinherenthighrisksIIValSecIVtxt:"",
MyAISystemdeployedSecIVtxt:"",
MyAISharepointSecVtxt:"",
MyAIsystemGenerativetextSecV:"",
MyDescribewhatandhow:true,

BussinessownerEmailArray:[],
TechnicalOwnerEmailArray:[],

ListGoes:true,
MyGeographyValtext:"",

SecIDisableAfterSave:false,
SecIIDisableAfterSave:false,
SecvVisble:false,
SecIIIfinalAfterSave:false,
ProjectClasssText:"",
SecClosed:false,
GroupExsits1:true,
GroupExsits2:true,
showApprovalbuttons:false,
showApprovalbuttonsLevel2:false,
showRequestSectionIIIbutton:false,
showSecIIFinal:false,
ShowLastSubmit:false,
MyProjectClassifications:"",
MySavedProjectClassVal:""


//END


//END


    };


    //RootUrl = this.props.url;

    this._service = new Service(this.props.url, this.props.context);
    
    this.GlobalService = new Service(this.props.url, this.props.context);
    myitemId = this.getParam('SID');

    console.log(myitemId);


    this.getAllProjClassItems();
    this.getAllProjClassItemsSecII();
    this.getAllProjClassItemsSecIII();
    this.getAllGeographyTypes();
    this.getAllCapcoDomainTypes();
    this.getProjectStages();
    this.getAllOptionsValues();
    this.getSectionIdetails();
  
 // this.getHRandAdminGroupUserorNot();

  }

public  getParam( name:any )
{
 name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
 var regexS = "[\\?&]"+name+"=([^&#]*)";
 var regex = new RegExp( regexS );
 var results = regex.exec(window.location.href);
 if( results == null )
 return "";
 else
 return results[1];
}

  public async getAllProjClassItems() {


   
    var data = await this._service.GetAllProjClasstypes();
    
 
     console.log(data);
 
     var AllProjClassListITypes: any = [];
 
     for (var k in data) {

        AllProjClassListITypes.push({ key: data[k].ID, text: data[k].Title });


     }
 
     console.log(AllProjClassListITypes);
 
     this.setState({ ProjectClassListItems: AllProjClassListITypes });
 
   }

   public async getAllProjClassItemsSecII() {

    var data = await this._service.GetAllProjClasstypesSecII();
    
 
     console.log(data);
 
     var AllProjClassListITypesSecII: any = [];
 
     for (var k in data) {

      AllProjClassListITypesSecII.push({ key: data[k].ID, text: data[k].Title });


     }
 
     console.log(AllProjClassListITypesSecII);
 
     this.setState({ ProjectClassListItemsSecII: AllProjClassListITypesSecII });
 
   }

   public async getAllProjClassItemsSecIII() {

   var data = await this._service.GetAllProjClasstypesSecIII();
    
     console.log(data);
 
     var AllProjClassListITypesSecIII: any = [];
 
     for (var k in data) {

      AllProjClassListITypesSecIII.push({ key: data[k].ID, text: data[k].Title });


     }
 
     console.log(AllProjClassListITypesSecIII);
 
     this.setState({ ProjectClassListItemsSecIII: AllProjClassListITypesSecIII });
 
   }


  private changeProjectSystemName(data: any): void {

    this.setState({ ProjSystemName: data.target.value });
  
  }

  private handleChangeProjClassValue(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {

    
    this.setState({ MyProjectClassVal:item.key });
    this.setState({MyProjectClassifications:item.text});
    

    if(item.text=='Demonstrator')
    {

      this.setState({ SecIIVisble: true });
      this.setState({ SecIIIVisble: false });


      this.setState({ SecIIbuttonVisble: true });
      this.setState({SecIbuttonVisble:false});
      this.setState({ SecIIIbuttonVisble: false });
      
    }

    else if(item.text=='Accelerator' || item.text=='Internal  Tool')
    {

      

      // if(ItemInfoStatus=='Request')
      // {

      //   this.setState({ SecvVisble: false });
        

      // }

      // else
      // {

        this.setState({ SecIIVisble: true });
        this.setState({ SecIIIVisble: true });
  
        this.setState({ SecIIbuttonVisble: false });
        this.setState({SecIbuttonVisble:false});
        this.setState({ SecIIIbuttonVisble: true });

      //}

    
   

      
    }


    else if(item.text=='Concept' || item.text=='Product')
    {

      this.setState({SecIVisble:true});
      this.setState({ SecIIVisble: false });
      this.setState({ SecIIIVisble: false });

      this.setState({SecIbuttonVisble:true});
      this.setState({ SecIIbuttonVisble: false });
      this.setState({ SecIIIbuttonVisble: false });
      


    }

   




  }


  private handleChangeProjClassValueSecII(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {

    
    this.setState({ MyProjectClassVal:item.key });
    this.setState({MyProjectClassifications:item.text});
    

    if(item.text=='Demonstrator')
    {

      this.setState({ SecIIVisble: true });
      this.setState({ SecIIIVisble: false });


      this.setState({ SecIIbuttonVisble: true });
      this.setState({SecIbuttonVisble:false});
      this.setState({ SecIIIbuttonVisble: false });
      
    }

    else if(item.text=='Accelerator' || item.text=='Internal  Tool')
    {

      

      // if(ItemInfoStatus=='Request')
      // {

      //   this.setState({ SecvVisble: false });
        

      // }

      // else
      // {

        this.setState({ SecIIVisble: true });
        this.setState({ SecIIIVisble: true });
  
        this.setState({ SecIIbuttonVisble: false });
        this.setState({SecIbuttonVisble:false});
        this.setState({ SecIIIbuttonVisble: true });

      //}

    
   

      
    }


    else if(item.text=='Concept' || item.text=='Product')
    {

      this.setState({SecIVisble:true});
      this.setState({ SecIIVisble: false });
      this.setState({ SecIIIVisble: false });

      this.setState({SecIbuttonVisble:true});
      this.setState({ SecIIbuttonVisble: false });
      this.setState({ SecIIIbuttonVisble: false });
      


    }

   




  }

  private handleChangeProjClassValueSecIII(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {

    if(ItemInfoStatus=="Request")

    
        {
          this.setState({ MyProjectClassVal:item.key });
          this.setState({MyProjectClassifications:item.text});
         

        }

        else
        {
          this.setState({ MyProjectClassVal:item.key });
          this.setState({MyProjectClassifications:item.text});
          this.setState({ SecvVisble: true });
          this.setState({ShowLastSubmit:false});

        }
    
    


      
    }

 
  public async  _getPeoplePickerItemsBussinessOwner(items: any[]) 
  {

   
    defaultUsers=[];

    for(var count=0;count<items.length;count++)
    {


        let userInfo1 = await this._service.getUserByLogin(items[count].loginName).then((info:any)=>{
        defaultUsers.push(info.Id);
        
        console.log(info);
        console.log(userInfo1);

   });

   
    }

    console.log(defaultUsers);

    this.setState({BussinessownerEmailArray:defaultUsers});


  //   if(items.length>0)
  //     {
  
  //     Bussinessowner = items[0].text;

  //       let userInfo1 = this._service.getUserByLogin(items[0].loginName).then((info:any)=>{
  //       this.setState({BussinessOwnerName:info});
  //       console.log(info);
  //       console.log(userInfo1);

  //  });

  
      
      // }
  
      // else
      // {
  
      //   this.setState({BussinessOwnerName:null});
      // }


  
  
           }

  private async _getPeoplePickerItemsTechnicalOwner(items: any[]) {


   
    for(var count=0;count<items.length;count++)
    {


        let userInfo11 = await this._service.getUserByLogin(items[count].loginName).then((info:any)=>{
        defaultUsers1.push(info.Id);
        
        console.log(info);
        console.log(userInfo11);

   });

   
    }

    console.log(defaultUsers1);

    this.setState({TechnicalOwnerEmailArray:defaultUsers1});

          
                  }

  private changePurpose(data: any): void {

  this.setState({ Purpose: data.target.value });
                  
                  }

  private handleChangeGeoraphyType(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {

    
                    this.setState({ MyGeographyVal:item.key });

                    this.setState({ MyGeographyValtext:item.text });

if(item.text=='Multiple')
{
  this.setState({ListGoes:false})

}

else
{

  this.setState({ListGoes:true})
}

                    
                
                           }

  public async getAllGeographyTypes() {

                            var data = await this._service.GetAllgeographytypes();
                         
                             console.log(data);
                         
                             var AllGeographyListITypes: any = [];
                         
                             for (var k in data) {
                         
                               AllGeographyListITypes.push({ key: data[k].ID, text: data[k].Title });
                             }
                         
                             console.log(AllGeographyListITypes);
                         
                             this.setState({ GeographyListItems: AllGeographyListITypes });
                         
                           }

  public async getAllCapcoDomainTypes() {

      var data = await this._service.GetAllCapcoDomaintypes();
   
       console.log(data);
   
       var AllCapcodomainListITypes: any = [];
   
       for (var k in data) {
   
        AllCapcodomainListITypes.push({ key: data[k].ID, text: data[k].Title });
       }
   
       console.log(AllCapcodomainListITypes);
   
       this.setState({ CapcoDomailListItems: AllCapcodomainListITypes });
   
     }

     private handleChangeCapcoDomain(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {

    
      this.setState({ MyCapcoDomainVal:item.key });
  
    }

    private changeClient(data: any): void {

      this.setState({ Client: data.target.value });
    
    }
  
    private changeSales(data: any): void {

      this.setState({ SalesId: data.target.value });
    
    }

    public async getProjectStages() {

      var data = await this._service.GetAllProjStages();
   
       console.log(data);
   
       var AllProjStageListITypes: any = [];
   
       for (var k in data) {
   
        AllProjStageListITypes.push({ key: data[k].ID, text: data[k].Title });
       }
   
       console.log(AllProjStageListITypes);
   
       this.setState({ ProjectStageListItems: AllProjStageListITypes });
   
     }

     private handleChangeProjectStage(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {

    
      this.setState({ MyProjectStage:item.key });
  
             }

   
    private changeScopeofProject(data: any): void {

              this.setState({ ScopeofProject: data.target.value });
            
            }
                        
    private NotchangeScopeofProject(data: any): void {

              this.setState({ NotScopeofProject: data.target.value });
            
            }

            private ChangeEvidenceofResearch(data: any): void {

              this.setState({ Evidenceofresearch: data.target.value });
            
            }

            private changeArumentSecIItxt(data: any): void {

              this.setState({ ArumentSecIItxt: data.target.value });
            
            }

            //Save

            private onSectionISave()
            {


              if (this.state.ProjSystemName == null  || this.state.ProjSystemName == '') {

                alert('Please enter Project System Name');
                
              }

              else if (this.state.MyProjectClassVal == null  || this.state.MyProjectClassVal == '' || this.state.MyProjectClassVal == 'Select Project Classification') {

                alert('Please select Project Classification');
                
              }

              else if (this.state.Purpose == null  || this.state.Purpose == '') 
                
                {

                alert('Please enter purpose and key concept(s) of the project/system');
                
              }

             
               else if(this.state.BussinessownerEmailArray=='' || this.state.BussinessownerEmailArray==null)
                 {
           
                 alert('Please select Businessowner');
                
               }
          
               else if(this.state.TechnicalOwnerEmailArray=='' || this.state.TechnicalOwnerEmailArray==null)
                {
           
                alert('Please select Technicalowner');
                
               }

            else if (this.state.MyGeographyVal == null  || this.state.MyGeographyVal == "" || this.state.MyGeographyVal == 'Select Geography') {

                alert('Please select Geography');
                
          
              }

              

              else if (this.state.MyCapcoDomainVal == null  || this.state.MyCapcoDomainVal == '' || this.state.MyCapcoDomainVal == 'Select CapcoDomain') {

                alert('Please select Capco Domain');
                
              }

              else if(this.state.Client== null  || this.state.Client == '')

                {
          
                  alert('Please enter Client Name');
          
                }

                else if(this.state.SalesId== null  || this.state.SalesId == '')

                  {
            
                alert('Please enter Sales App Opportunity ID');
            
                  }

                  else if (this.state.MyProjectStage == null  || this.state.MyProjectStage == '' || this.state.MyProjectStage == 'Project Stage') 
                    
                    {

                    alert('Please select Project Stage');
                    
                  }

                  else if (this.state.ScopeofProject == null  || this.state.ScopeofProject == '') 
                    
                    {

                    alert('Please enter Scope of project/system');
                    
                  }
            
                  else if (this.state.NotScopeofProject == null  || this.state.NotScopeofProject == '') 
                    
                    {

                    alert('Please enter Not in scope of project/system');
                    
                  }

                  else if (this.state.Evidenceofresearch == null  || this.state.Evidenceofresearch == '') 
                    
                    {

                    alert('Please enter Evidence of research');
                    
                  }
          

              else
              {

  
                 this._service.Save(
                  this.state.ProjSystemName,
                  this.state.MyProjectClassVal,
                  this.state.Purpose,

                  (this.state.BussinessownerEmailArray),
                  (this.state.TechnicalOwnerEmailArray),
                  this.state.MyGeographyVal,
                  //this.state.Listgoes,
                  this.state.MyCapcoDomainVal,
                  this.state.Client,
                  this.state.SalesId,
                  this.state.MyProjectStage,
                  this.state.ScopeofProject,
                  this.state.NotScopeofProject,
                  this.state.Evidenceofresearch,
                  this.state.MyProjectClassifications

                  ).then(function (data:any)
                      {
                  
                        console.log(data);
            
                        
                      });

              //  // alert('Done');
              //   console.log(this.onMessage());
              }

            }


            private onSectionIISave()
            {


              if (this.state.ProjSystemName == null  || this.state.ProjSystemName == '') {

                alert('Please enter Project System Name');
                
              }

              else if (this.state.MyProjectClassVal == null  || this.state.MyProjectClassVal == '' || this.state.MyProjectClassVal == 'Select Project Classification') {

                alert('Please select Project Classification');
                
              }

              else if (this.state.Purpose == null  || this.state.Purpose == '') 
                
                {

                alert('Please enter purpose and key concept(s) of the project/system');
                
              }

             
              else if(this.state.BussinessownerEmailArray=='' || this.state.BussinessownerEmailArray==null)
                {
          
                alert('Please select Businessowner');
               
              }
         
              else if(this.state.TechnicalOwnerEmailArray=='' || this.state.TechnicalOwnerEmailArray==null)
               {
          
               alert('Please select Technicalowner');
               
              }

            else if (this.state.MyGeographyVal == null  || this.state.MyGeographyVal == "" || this.state.MyGeographyVal == 'Select Geography') {

                alert('Please select Geography');
                
          
              }

             

              else if (this.state.MyCapcoDomainVal == null  || this.state.MyCapcoDomainVal == '' || this.state.MyCapcoDomainVal == 'Select CapcoDomain') {

                alert('Please select Capco Domain');
                
              }

              else if(this.state.Client== null  || this.state.Client == '')

                {
          
                  alert('Please enter Client Name');
          
                }

                else if(this.state.SalesId== null  || this.state.SalesId == '')

                  {
            
                alert('Please enter Sales App Opportunity ID');
            
                  }

                  else if (this.state.MyProjectStage == null  || this.state.MyProjectStage == '' || this.state.MyProjectStage == 'Project Stage') 
                    
                    {

                    alert('Please select Project Stage');
                    
                  }

                  else if (this.state.ScopeofProject == null  || this.state.ScopeofProject == '') 
                    
                    {

                    alert('Please enter Scope of project/system');
                    
                  }
            
                  else if (this.state.NotScopeofProject == null  || this.state.NotScopeofProject == '') 
                    
                    {

                    alert('Please enter Not in scope of project/system');
                    
                  }

                  else if (this.state.Evidenceofresearch == null  || this.state.Evidenceofresearch == '') 
                    
                    {

                    alert('Please enter Evidence of research');
                    
                  }
          


              //Personal & ComponentData

              //TOT 29

             else if(this.state.MyAISytemCaptureSectionIIVal== null  || this.state.MyAISytemCaptureSectionIIVal == '')

                {

                  alert('Please Select  AI system capture, store or process personal data')

                }

                else if(this.state.MyAISystemArgumenStectionIIVal== null  || this.state.MyAISystemArgumenStectionIIVal== '')

                {
                 alert('Please Select AI system be augmented with Capco or client data');

                }

                //END

                //Prohibited AI

        else if(this.state.MyAIsystemCCTVfootageSectionIIVal== null  || this.state.MyAIsystemCCTVfootageSectionIIVal== '')
                 {
                   alert('Please Select AI system rely on the untargeted collection of facial images from the internet or CCTV footage to build facial recognition databases');
  
                  }

        else if(this.state.MyAIsystemrelySectionIIVal==null || this.state.MyAIsystemrelySectionIIVal=='')
                  {

                    alert('Please Select AI system rely on subliminal, purposefully manipulative, or deceptive techniques to influence individuals behavior');
                  }


             else if(this.state.MyAISysteminferemotionsSectionIIVal==null || this.state.MyAISysteminferemotionsSectionIIVal=='')
             {

             alert('Please Select AI system analyze or infer emotions of individuals within the workplace or educational institutions')

             }



             else if(this.state.MyAISystembiometricSectionIIVal==null || this.state.MyAISystembiometricSectionIIVal=='')
             {

              alert('Please Select AI system use biometric data to deduce or infer race, political opinions, trade union membership, religious or philosophical beliefs, sex life, or sexual orientation');
             }

             else if(this.state.MyAIsystemriskassessmentsSectionIIVal==null || this.state.MyAIsystemriskassessmentsSectionIIVal=='')
             {

            alert('Please select AI system make risk assessments of individuals to identify or predict the risk that they will commit a criminal offense')
             }

             else if(this.state.MyAISystemSocialScoringsSectionIIVal ==null || this.state.MyAISystemSocialScoringsSectionIIVal =="")
             {

            alert('Please select AI system involved in social scoring of individuals, potentially leading to detrimental or unfavorable treatment based on their behavior, characteristics, or personal circumstances')

             }

             else if(this.state.MyAISystemEngageSectionIIVal==null || this.state.MyAISystemEngageSectionIIVal=='')
             {

              alert('Please Select AI system engage in mass surveillance of individuals in public or private spaces without their explicit consent')

             }

             else if(this.state.MyAIsystemleagalSectionIIVal==null || this.state.MyAIsystemleagalSectionIIVal=='')
             {

              alert('Please Select the AI system make significant legal or similar decisions (e.g., in employment, healthcare, education) without human review or possibility for appeal');

             }


             else if(this.state.MyAIsysteminfluenceSectionIIVal==null || this.state.MyAIsysteminfluenceSectionIIVal=='')
             {

              alert('Please Select the AI system designed to influence or manipulate political campaigns, voting behavior, or other democratic processes')

             }

             else if(this.state.MyAIsystemcriminalSectionIIVal==null || this.state.MyAIsystemcriminalSectionIIVal=='')
             {

              alert('Please Select the AI system make criminal risk assessments or predictions about individuals based on profiling or other biometric data')
             }

             else if(this.state.MyAIsystembiometricSectionIIVal==null || this.state.MyAIsystembiometricSectionIIVal=='')
             {

              alert('Please Select the AI system use real-time biometric identification in publicly accessible spaces for law enforcement purposes')
             }

             else if(this.state.MyAIsystemexploitSectionIIVal==null || this.state.MyAIsystemexploitSectionIIVal=='')
             {

              alert('Please Select the AI system exploit vulnerabilities of individuals based on factors such as age, disability, or socio-economic status to influence their behavior');
             }

             //END
            
             //High Risk

             else if(this.state.MyAIsystemindividualiseligibleIIValSecIV==null || this.state.MyAIsystemindividualiseligibleIIValSecIV=='')
             {

              alert('Please Select the AI system be used to assess whether an individual is eligible to receive medical treatment or influence health outcomes')
             }

             else if(this.state.MyAIsystemeducationevaluateprogressIIValSecIV==null || this.state.MyAIsystemeducationevaluateprogressIIValSecIV=='')
             {

              alert('Please Select the AI system be used to determine access to education, evaluate progress, or detect cheating in academic or training settings')
             }

             else if(this.state.MyAIsystemassesseligibilityemploymentIIValSecIV==null || this.state.MyAIsystemassesseligibilityemploymentIIValSecIV=='')
             {

              alert('Please Select the AI system be used to assess eligibility for employment,promotions,loans,or housing')
             }

             else if(this.state.MyAIsystemprofileindividualsIIValSecIV==null || this.state.MyAIsystemprofileindividualsIIValSecIV=='')
             {
            
              alert('Please Select the AI system be used to profile individuals or assess their risk of committing a crime')

             }

             else if(this.state.MyAIsystemoperatecontrolrobotsIIValSecIV==null || this.state.MyAIsystemoperatecontrolrobotsIIValSecIV=='')
             {
             
              alert('Please Select the AI system be used to operate or control robots, drones, medical devices, or other machinery');

             }

             //Check2

             else if(this.state.MyAIsystemtrainedthirdpartyrestrictedIIValSecIV==null || this.state.MyAIsystemtrainedthirdpartyrestrictedIIValSecIV=='')
             {

              alert('Please Select the AI system be trained using third-party restricted or non-public personal data without proper consent')

             }

            else if(this.state.MyAIsystemdecisionscontrolactionssignificantlyIIValSecIV==null || this.state.MyAIsystemdecisionscontrolactionssignificantlyIIValSecIV=='')
             {

              alert('Please Select the AI system make decisions or control actions that significantly impact individuals or groups, potentially causing fear or concern')
             }

             else if(this.state.MyAIsystemdividualsconcerninghighlysensitiveIIValSecIV==null || this.state.MyAIsystemdividualsconcerninghighlysensitiveIIValSecIV=='')
              {
                 alert('Please Select the AI system interact with a large number of individuals concerning highly sensitive or confidential matters')

             }

             else if(this.state.MyAIsystemcriticaloperatingessentialinfrastructureIIValSecIV==null || this.state.MyAIsystemcriticaloperatingessentialinfrastructureIIValSecIV=='')
              {
                 
                alert('Please Select the AI system play a critical role in operating essential infrastructure')

             }
          
             else if(this.state.MyAIsystemincreasedsignificantnegativeIIValSecIV==null || this.state.MyAIsystemincreasedsignificantnegativeIIValSecIV=='')
              {

                alert('Please Select the AI system pose an increased risk of significant negative media coverage or reputational damage for Capco or its clients')
             }

//END

             else if(this.state.MyAIsystemleadsignificantfinanciallossesIIValSecIV==null || this.state.MyAIsystemleadsignificantfinanciallossesIIValSecIV=='')
             {

              alert('Please Select the AI system lead to significant financial losses, legal liabilities, or damage to others');


             }

             else if(this.state.MyAIsystemimpactCapcosapplicablelawsIIValSecIV==null || this.state.MyAIsystemimpactCapcosapplicablelawsIIValSecIV=='')
             {
            alert('Please Select a failure of the AI system impact Capcos ability to comply with applicable laws or regulations in a serious way')

             }

             else if(this.state.MyAIcomponentrepresentsignificantinvestmentIIValSecIV==null || this.state.MyAIcomponentrepresentsignificantinvestmentIIValSecIV=='')
             {

              alert('Please Select the AI component represent a significant investment or hold strategic importance for Capco')

             }

             //last

             else if(this.state.MyAIsystemsuggestinherenthighrisksIIValSecIV==null || this.state.MyAIsystemsuggestinherenthighrisksIIValSecIV=='')
             {
alert('Please Select the characteristics of the AI system suggest that there are inherent high risks that must be considered')

             }

             else if(this.state.MyAISystemdeployedSecIV==null || this.state.MyAISystemdeployedSecIV=='')
             {

              alert('Please Select the AI system be deployed in any of the following regulated sectors')


             }

             else if(this.state.MyAISharepointSecV==null || this.state.MyAISharepointSecV=='')
             {

              alert('Please Select In spite of other responses in the High Risk category, does the AI system pose no significant risk of harm to individuals health, safety or fundamental rights')


             }

             //end

             else
             {

              this._service.SaveSectionII(

               //seci
               this.state.ProjSystemName,
               this.state.MyProjectClassVal,
               this.state.Purpose,
               (this.state.BussinessownerEmailArray),
               (this.state.TechnicalOwnerEmailArray),
               this.state.MyGeographyVal,
               //this.state.Listgoes,
               this.state.MyCapcoDomainVal,
               this.state.Client,
               this.state.SalesId,
               this.state.MyProjectStage,
               this.state.ScopeofProject,
               this.state.NotScopeofProject,
               this.state.Evidenceofresearch,
               this.state.MyProjectClassifications,



               //end


                this.state.MyAISytemCaptureSectionIIValtxt,
                this.state.MyAISystemArgumenStectionIIValtxt,
                this.state.MyAIsystemCCTVfootageSectionIIValtxt,
                this.state.MyAIsystemrelySectionIIValtxt,
                this.state.MyAISysteminferemotionsSectionIIValtxt,

                this.state.MyAISystembiometricSectionIIValtxt,
                this.state.MyAIsystemriskassessmentsSectionIIValtxt,
                this.state.MyAISystemSocialScoringsSectionIIValtxt,
                this.state.MyAISystemEngageSectionIIValtxt,
                this.state.MyAIsystemleagalSectionIIValtxt,

                this.state.MyAIsysteminfluenceSectionIIValtxt,
                this.state.MyAIsystemcriminalSectionIIValtxt,
                this.state.MyAIsystembiometricSectionIIValtxt,
                this.state.MyAIsystemexploitSectionIIValtxt,

                //High RISK AI
                this.state.MyAIsystemindividualiseligibleIIValSecIVtxt,
                this.state.MyAIsystemeducationevaluateprogressIIValSecIVtxt,
                this.state.MyAIsystemassesseligibilityemploymentIIValSecIVtxt,
                this.state.MyAIsystemprofileindividualsIIValSecIVtxt,
                this.state.MyAIsystemoperatecontrolrobotsIIValSecIVtxt,

                //Check2

                this.state.MyAIsystemtrainedthirdpartyrestrictedIIValSecIVtxt,
                this.state.MyAIsystemdecisionscontrolactionssignificantlyIIValSecIVtxt,
                this.state.MyAIsystemdividualsconcerninghighlysensitiveIIValSecIVtxt,
                this.state.MyAIsystemcriticaloperatingessentialinfrastructureIIValSecIVtxt,
                this.state.MyAIsystemincreasedsignificantnegativeIIValSecIVtxt,

                //END

                this.state.MyAIsystemleadsignificantfinanciallossesIIValSecIVtxt,
                this.state.MyAIsystemimpactCapcosapplicablelawsIIValSecIVtxt,
                this.state.MyAIcomponentrepresentsignificantinvestmentIIValSecIVtxt,


                this.state.MyAIsystemsuggestinherenthighrisksIIValSecIVtxt,
                this.state.MyAISystemdeployedSecIVtxt,
                this.state.MyAISharepointSecVtxt,
                this.state.ArumentSecIItxt,

                //END


                ).then(function (data:any)
                    {
                
                    });


             }

             //END


            }

            private OnBtnUpdateSectionIIClick():void {


              if(this.state.MyAISytemCaptureSectionIIVal== null  || this.state.MyAISytemCaptureSectionIIVal == '')

                {

                  alert('Please Select  AI system capture, store or process personal data')

                }

                else if(this.state.MyAISystemArgumenStectionIIVal== null  || this.state.MyAISystemArgumenStectionIIVal== '')

                {
                 alert('Please Select AI system be augmented with Capco or client data');

                }

                //END

                //Prohibited AI

        else if(this.state.MyAIsystemCCTVfootageSectionIIVal== null  || this.state.MyAIsystemCCTVfootageSectionIIVal== '')
                 {
                   alert('Please Select AI system rely on the untargeted collection of facial images from the internet or CCTV footage to build facial recognition databases');
  
                  }

        else if(this.state.MyAIsystemrelySectionIIVal==null || this.state.MyAIsystemrelySectionIIVal=='')
                  {

                    alert('Please Select AI system rely on subliminal, purposefully manipulative, or deceptive techniques to influence individuals behavior');
                  }


             else if(this.state.MyAISysteminferemotionsSectionIIVal==null || this.state.MyAISysteminferemotionsSectionIIVal=='')
             {

             alert('Please Select AI system analyze or infer emotions of individuals within the workplace or educational institutions')

             }



             else if(this.state.MyAISystembiometricSectionIIVal==null || this.state.MyAISystembiometricSectionIIVal=='')
             {

              alert('Please Select AI system use biometric data to deduce or infer race, political opinions, trade union membership, religious or philosophical beliefs, sex life, or sexual orientation');
             }

             else if(this.state.MyAIsystemriskassessmentsSectionIIVal==null || this.state.MyAIsystemriskassessmentsSectionIIVal=='')
             {

            alert('Please select AI system make risk assessments of individuals to identify or predict the risk that they will commit a criminal offense')
             }

             else if(this.state.MyAISystemSocialScoringsSectionIIVal ==null || this.state.MyAISystemSocialScoringsSectionIIVal =="")
             {

            alert('Please select AI system involved in social scoring of individuals, potentially leading to detrimental or unfavorable treatment based on their behavior, characteristics, or personal circumstances')

             }

             else if(this.state.MyAISystemEngageSectionIIVal==null || this.state.MyAISystemEngageSectionIIVal=='')
             {

              alert('Please Select AI system engage in mass surveillance of individuals in public or private spaces without their explicit consent')

             }

             else if(this.state.MyAIsystemleagalSectionIIVal==null || this.state.MyAIsystemleagalSectionIIVal=='')
             {

              alert('Please Select the AI system make significant legal or similar decisions (e.g., in employment, healthcare, education) without human review or possibility for appeal');

             }


             else if(this.state.MyAIsysteminfluenceSectionIIVal==null || this.state.MyAIsysteminfluenceSectionIIVal=='')
             {

              alert('Please Select the AI system designed to influence or manipulate political campaigns, voting behavior, or other democratic processes')

             }

             else if(this.state.MyAIsystemcriminalSectionIIVal==null || this.state.MyAIsystemcriminalSectionIIVal=='')
             {

              alert('Please Select the AI system make criminal risk assessments or predictions about individuals based on profiling or other biometric data')
             }

             else if(this.state.MyAIsystembiometricSectionIIVal==null || this.state.MyAIsystembiometricSectionIIVal=='')
             {

              alert('Please Select the AI system use real-time biometric identification in publicly accessible spaces for law enforcement purposes')
             }

             else if(this.state.MyAIsystemexploitSectionIIVal==null || this.state.MyAIsystemexploitSectionIIVal=='')
             {

              alert('Please Select the AI system exploit vulnerabilities of individuals based on factors such as age, disability, or socio-economic status to influence their behavior');
             }

             //END
            
             //High Risk

             else if(this.state.MyAIsystemindividualiseligibleIIValSecIV==null || this.state.MyAIsystemindividualiseligibleIIValSecIV=='')
             {

              alert('Please Select the AI system be used to assess whether an individual is eligible to receive medical treatment or influence health outcomes')
             }

             else if(this.state.MyAIsystemeducationevaluateprogressIIValSecIV==null || this.state.MyAIsystemeducationevaluateprogressIIValSecIV=='')
             {

              alert('Please Select the AI system be used to determine access to education, evaluate progress, or detect cheating in academic or training settings')
             }

             else if(this.state.MyAIsystemassesseligibilityemploymentIIValSecIV==null || this.state.MyAIsystemassesseligibilityemploymentIIValSecIV=='')
             {

              alert('Please Select the AI system be used to assess eligibility for employment,promotions,loans,or housing')
             }

             else if(this.state.MyAIsystemprofileindividualsIIValSecIV==null || this.state.MyAIsystemprofileindividualsIIValSecIV=='')
             {
            
              alert('Please Select the AI system be used to profile individuals or assess their risk of committing a crime')

             }

             else if(this.state.MyAIsystemoperatecontrolrobotsIIValSecIV==null || this.state.MyAIsystemoperatecontrolrobotsIIValSecIV=='')
             {
             
              alert('Please Select the AI system be used to operate or control robots, drones, medical devices, or other machinery');

             }

             //Check2

             else if(this.state.MyAIsystemtrainedthirdpartyrestrictedIIValSecIV==null || this.state.MyAIsystemtrainedthirdpartyrestrictedIIValSecIV=='')
             {

              alert('Please Select the AI system be trained using third-party restricted or non-public personal data without proper consent')

             }

            else if(this.state.MyAIsystemdecisionscontrolactionssignificantlyIIValSecIV==null || this.state.MyAIsystemdecisionscontrolactionssignificantlyIIValSecIV=='')
             {

              alert('Please Select the AI system make decisions or control actions that significantly impact individuals or groups, potentially causing fear or concern')
             }

             else if(this.state.MyAIsystemdividualsconcerninghighlysensitiveIIValSecIV==null || this.state.MyAIsystemdividualsconcerninghighlysensitiveIIValSecIV=='')
              {
                 alert('Please Select the AI system interact with a large number of individuals concerning highly sensitive or confidential matters')

             }

             else if(this.state.MyAIsystemcriticaloperatingessentialinfrastructureIIValSecIV==null || this.state.MyAIsystemcriticaloperatingessentialinfrastructureIIValSecIV=='')
              {
                 
                alert('Please Select the AI system play a critical role in operating essential infrastructure')

             }
          
             else if(this.state.MyAIsystemincreasedsignificantnegativeIIValSecIV==null || this.state.MyAIsystemincreasedsignificantnegativeIIValSecIV=='')
              {

                alert('Please Select the AI system pose an increased risk of significant negative media coverage or reputational damage for Capco or its clients')
             }

//END

             else if(this.state.MyAIsystemleadsignificantfinanciallossesIIValSecIV==null || this.state.MyAIsystemleadsignificantfinanciallossesIIValSecIV=='')
             {

              alert('Please Select the AI system lead to significant financial losses, legal liabilities, or damage to others');


             }

             else if(this.state.MyAIsystemimpactCapcosapplicablelawsIIValSecIV==null || this.state.MyAIsystemimpactCapcosapplicablelawsIIValSecIV=='')
             {
            alert('Please Select a failure of the AI system impact Capcos ability to comply with applicable laws or regulations in a serious way')

             }

             else if(this.state.MyAIcomponentrepresentsignificantinvestmentIIValSecIV==null || this.state.MyAIcomponentrepresentsignificantinvestmentIIValSecIV=='')
             {

              alert('Please Select the AI component represent a significant investment or hold strategic importance for Capco')

             }

             //last

             else if(this.state.MyAIsystemsuggestinherenthighrisksIIValSecIV==null || this.state.MyAIsystemsuggestinherenthighrisksIIValSecIV=='')
             {
alert('Please Select the characteristics of the AI system suggest that there are inherent high risks that must be considered')

             }

             else if(this.state.MyAISystemdeployedSecIV==null || this.state.MyAISystemdeployedSecIV=='')
             {

              alert('Please Select the AI system be deployed in any of the following regulated sectors')


             }

             else if(this.state.MyAISharepointSecV==null || this.state.MyAISharepointSecV=='')
             {

              alert('Please Select In spite of other responses in the High Risk category, does the AI system pose no significant risk of harm to individuals health, safety or fundamental rights')


             }

             else
             {


                this._service.UpdateSectionII(
        
                myitemId,
                this.state.MyAISytemCaptureSectionIIValtxt,
                this.state.MyAISystemArgumenStectionIIValtxt,
                this.state.MyAIsystemCCTVfootageSectionIIValtxt,
                this.state.MyAIsystemrelySectionIIValtxt,
                this.state.MyAISysteminferemotionsSectionIIValtxt,

                this.state.MyAISystembiometricSectionIIValtxt,
                this.state.MyAIsystemriskassessmentsSectionIIValtxt,
                this.state.MyAISystemSocialScoringsSectionIIValtxt,
                this.state.MyAISystemEngageSectionIIValtxt,
                this.state.MyAIsystemleagalSectionIIValtxt,

                this.state.MyAIsysteminfluenceSectionIIValtxt,
                this.state.MyAIsystemcriminalSectionIIValtxt,
                this.state.MyAIsystembiometricSectionIIValtxt,
                this.state.MyAIsystemexploitSectionIIValtxt,

                //High RISK AI
                this.state.MyAIsystemindividualiseligibleIIValSecIVtxt,
                this.state.MyAIsystemeducationevaluateprogressIIValSecIVtxt,
                this.state.MyAIsystemassesseligibilityemploymentIIValSecIVtxt,
                this.state.MyAIsystemprofileindividualsIIValSecIVtxt,
                this.state.MyAIsystemoperatecontrolrobotsIIValSecIVtxt,

                //Check2

                this.state.MyAIsystemtrainedthirdpartyrestrictedIIValSecIVtxt,
                this.state.MyAIsystemdecisionscontrolactionssignificantlyIIValSecIVtxt,
                this.state.MyAIsystemdividualsconcerninghighlysensitiveIIValSecIVtxt,
                this.state.MyAIsystemcriticaloperatingessentialinfrastructureIIValSecIVtxt,
                this.state.MyAIsystemincreasedsignificantnegativeIIValSecIVtxt,

                //END

                this.state.MyAIsystemleadsignificantfinanciallossesIIValSecIVtxt,
                this.state.MyAIsystemimpactCapcosapplicablelawsIIValSecIVtxt,
                this.state.MyAIcomponentrepresentsignificantinvestmentIIValSecIVtxt,


                this.state.MyAIsystemsuggestinherenthighrisksIIValSecIVtxt,
                this.state.MyAISystemdeployedSecIVtxt,
                this.state.MyAISharepointSecVtxt,
                this.state.ArumentSecIItxt,
                this.state.MyProjectClassifications

               
        
               ).then(function (data:any)
                    {
                
                      console.log(data);
          
                      alert('Record Updated successfully');
                      
                    //window.location.replace("https://capcoinc.sharepoint.com/sites/EnterpriseRiskKeyContactsandOverview/SitePages/AI%20RISK%20Assessment%20Datatable.aspx");
                    });

              
             }


              
            }


            private OnBtnApproveLevel1Click():void{

              this._service.Approve(
        
                myitemId,
                "Level1Approved"
               
        
               ).then(function (data:any)
                    {
                
                      console.log(data);
          
                      alert('Record Approved successfully');
                      
                    //window.location.replace("https://capcoinc.sharepoint.com/sites/EnterpriseRiskKeyContactsandOverview/SitePages/AI%20RISK%20Assessment%20Datatable.aspx");
                    });

                  

            }

            private OnBtnRejectLevel1Click():void{


              this._service.Reject(
        
                myitemId,
                "Closed"
               
        
               ).then(function (data:any)
                    {
                
                      console.log(data);
          
                      alert('Record Rejected successfully');
                      
                    //window.location.replace("https://capcoinc.sharepoint.com/sites/EnterpriseRiskKeyContactsandOverview/SitePages/AI%20RISK%20Assessment%20Datatable.aspx");
                    });

              
            }

            private OnBtnApproveLevel2Click():void{

              this._service.Approve(
        
                myitemId,
                "Level2Approved"
               
        
               ).then(function (data:any)
                    {
                
                      console.log(data);
          
                      alert('Record Approved successfully');
                      
                    //window.location.replace("https://capcoinc.sharepoint.com/sites/EnterpriseRiskKeyContactsandOverview/SitePages/AI%20RISK%20Assessment%20Datatable.aspx");
                    });

                  

            }

            private OnBtnRejectLevel2Click():void{


              this._service.Reject(
        
                myitemId,
                "Closed"
               
        
               ).then(function (data:any)
                    {
                
                      console.log(data);
          
                      alert('Record Rejected successfully');
                      
                    //window.location.replace("https://capcoinc.sharepoint.com/sites/EnterpriseRiskKeyContactsandOverview/SitePages/AI%20RISK%20Assessment%20Datatable.aspx");
                    });

              
            }

            private onSectionIIISave()
            {


              if (this.state.ProjSystemName == null  || this.state.ProjSystemName == '') {

                alert('Please enter Project System Name');
                
              }

              else if (this.state.MyProjectClassVal == null  || this.state.MyProjectClassVal == '' || this.state.MyProjectClassVal == 'Select Project Classification') {

                alert('Please select Project Classification');
                
              }

              else if (this.state.Purpose == null  || this.state.Purpose == '') 
                
                {

                alert('Please enter purpose and key concept(s) of the project/system');
                
              }

             
              else if(this.state.BussinessownerEmailArray=='' || this.state.BussinessownerEmailArray==null)
                {
          
                alert('Please select Businessowner');
               
              }
         
              else if(this.state.TechnicalOwnerEmailArray=='' || this.state.TechnicalOwnerEmailArray==null)
               {
          
               alert('Please select Technicalowner');
               
              }

            else if (this.state.MyGeographyVal == null  || this.state.MyGeographyVal == "" || this.state.MyGeographyVal == 'Select Geography') {

                alert('Please select Geography');
                
          
              }

             
              else if (this.state.MyCapcoDomainVal == null  || this.state.MyCapcoDomainVal == '' || this.state.MyCapcoDomainVal == 'Select CapcoDomain') {

                alert('Please select Capco Domain');
                
              }

              else if(this.state.Client== null  || this.state.Client == '')

                {
          
                  alert('Please enter Client Name');
          
                }

                else if(this.state.SalesId== null  || this.state.SalesId == '')

                  {
            
                alert('Please enter Sales App Opportunity ID');
            
                  }

                  else if (this.state.MyProjectStage == null  || this.state.MyProjectStage == '' || this.state.MyProjectStage == 'Project Stage') 
                    
                    {

                    alert('Please select Project Stage');
                    
                  }

                  else if (this.state.ScopeofProject == null  || this.state.ScopeofProject == '') 
                    
                    {

                    alert('Please enter Scope of project/system');
                    
                  }
            
                  else if (this.state.NotScopeofProject == null  || this.state.NotScopeofProject == '') 
                    
                    {

                    alert('Please enter Not in scope of project/system');
                    
                  }

                  else if (this.state.Evidenceofresearch == null  || this.state.Evidenceofresearch == '') 
                    
                    {

                    alert('Please enter Evidence of research');
                    
                  }
          


              //Personal & ComponentData

              //TOT 29

             else if(this.state.MyAISytemCaptureSectionIIVal== null  || this.state.MyAISytemCaptureSectionIIVal == '')

                {

                  alert('Please Select  AI system capture, store or process personal data')

                }

                else if(this.state.MyAISystemArgumenStectionIIVal== null  || this.state.MyAISystemArgumenStectionIIVal== '')

                {
                 alert('Please Select AI system be augmented with Capco or client data');

                }

                //END

                //Prohibited AI

        else if(this.state.MyAIsystemCCTVfootageSectionIIVal== null  || this.state.MyAIsystemCCTVfootageSectionIIVal== '')
                 {
                   alert('Please Select AI system rely on the untargeted collection of facial images from the internet or CCTV footage to build facial recognition databases');
  
                  }

        else if(this.state.MyAIsystemrelySectionIIVal==null || this.state.MyAIsystemrelySectionIIVal=='')
                  {

                    alert('Please Select AI system rely on subliminal, purposefully manipulative, or deceptive techniques to influence individuals behavior');
                  }


             else if(this.state.MyAISysteminferemotionsSectionIIVal==null || this.state.MyAISysteminferemotionsSectionIIVal=='')
             {

             alert('Please Select AI system analyze or infer emotions of individuals within the workplace or educational institutions')

             }



             else if(this.state.MyAISystembiometricSectionIIVal==null || this.state.MyAISystembiometricSectionIIVal=='')
             {

              alert('Please Select AI system use biometric data to deduce or infer race, political opinions, trade union membership, religious or philosophical beliefs, sex life, or sexual orientation');
             }

             else if(this.state.MyAIsystemriskassessmentsSectionIIVal==null || this.state.MyAIsystemriskassessmentsSectionIIVal=='')
             {

            alert('Please select AI system make risk assessments of individuals to identify or predict the risk that they will commit a criminal offense')
             }

             else if(this.state.MyAISystemSocialScoringsSectionIIVal ==null || this.state.MyAISystemSocialScoringsSectionIIVal =="")
             {

            alert('Please select AI system involved in social scoring of individuals, potentially leading to detrimental or unfavorable treatment based on their behavior, characteristics, or personal circumstances')

             }

             else if(this.state.MyAISystemEngageSectionIIVal==null || this.state.MyAISystemEngageSectionIIVal=='')
             {

              alert('Please Select AI system engage in mass surveillance of individuals in public or private spaces without their explicit consent')

             }

             else if(this.state.MyAIsystemleagalSectionIIVal==null || this.state.MyAIsystemleagalSectionIIVal=='')
             {

              alert('Please Select the AI system make significant legal or similar decisions (e.g., in employment, healthcare, education) without human review or possibility for appeal');

             }


             else if(this.state.MyAIsysteminfluenceSectionIIVal==null || this.state.MyAIsysteminfluenceSectionIIVal=='')
             {

              alert('Please Select the AI system designed to influence or manipulate political campaigns, voting behavior, or other democratic processes')

             }

             else if(this.state.MyAIsystemcriminalSectionIIVal==null || this.state.MyAIsystemcriminalSectionIIVal=='')
             {

              alert('Please Select the AI system make criminal risk assessments or predictions about individuals based on profiling or other biometric data')
             }

             else if(this.state.MyAIsystembiometricSectionIIVal==null || this.state.MyAIsystembiometricSectionIIVal=='')
             {

              alert('Please Select the AI system use real-time biometric identification in publicly accessible spaces for law enforcement purposes')
             }

             else if(this.state.MyAIsystemexploitSectionIIVal==null || this.state.MyAIsystemexploitSectionIIVal=='')
             {

              alert('Please Select the AI system exploit vulnerabilities of individuals based on factors such as age, disability, or socio-economic status to influence their behavior');
             }

             //END
            
             //High Risk

             else if(this.state.MyAIsystemindividualiseligibleIIValSecIV==null || this.state.MyAIsystemindividualiseligibleIIValSecIV=='')
             {

              alert('Please Select the AI system be used to assess whether an individual is eligible to receive medical treatment or influence health outcomes')
             }

             else if(this.state.MyAIsystemeducationevaluateprogressIIValSecIV==null || this.state.MyAIsystemeducationevaluateprogressIIValSecIV=='')
             {

              alert('Please Select the AI system be used to determine access to education, evaluate progress, or detect cheating in academic or training settings')
             }

             else if(this.state.MyAIsystemassesseligibilityemploymentIIValSecIV==null || this.state.MyAIsystemassesseligibilityemploymentIIValSecIV=='')
             {

              alert('Please Select the AI system be used to assess eligibility for employment,promotions,loans,or housing')
             }

             else if(this.state.MyAIsystemprofileindividualsIIValSecIV==null || this.state.MyAIsystemprofileindividualsIIValSecIV=='')
             {
            
              alert('Please Select the AI system be used to profile individuals or assess their risk of committing a crime')

             }

             else if(this.state.MyAIsystemoperatecontrolrobotsIIValSecIV==null || this.state.MyAIsystemoperatecontrolrobotsIIValSecIV=='')
             {
             
              alert('Please Select the AI system be used to operate or control robots, drones, medical devices, or other machinery');

             }

             //Check2

             else if(this.state.MyAIsystemtrainedthirdpartyrestrictedIIValSecIV==null || this.state.MyAIsystemtrainedthirdpartyrestrictedIIValSecIV=='')
             {

              alert('Please Select the AI system be trained using third-party restricted or non-public personal data without proper consent')

             }

            else if(this.state.MyAIsystemdecisionscontrolactionssignificantlyIIValSecIV==null || this.state.MyAIsystemdecisionscontrolactionssignificantlyIIValSecIV=='')
             {

              alert('Please Select the AI system make decisions or control actions that significantly impact individuals or groups, potentially causing fear or concern')
             }

             else if(this.state.MyAIsystemdividualsconcerninghighlysensitiveIIValSecIV==null || this.state.MyAIsystemdividualsconcerninghighlysensitiveIIValSecIV=='')
              {
                 alert('Please Select the AI system interact with a large number of individuals concerning highly sensitive or confidential matters')

             }

             else if(this.state.MyAIsystemcriticaloperatingessentialinfrastructureIIValSecIV==null || this.state.MyAIsystemcriticaloperatingessentialinfrastructureIIValSecIV=='')
              {
                 
                alert('Please Select the AI system play a critical role in operating essential infrastructure')

             }
          
             else if(this.state.MyAIsystemincreasedsignificantnegativeIIValSecIV==null || this.state.MyAIsystemincreasedsignificantnegativeIIValSecIV=='')
              {

                alert('Please Select the AI system pose an increased risk of significant negative media coverage or reputational damage for Capco or its clients')
             }

//END

             else if(this.state.MyAIsystemleadsignificantfinanciallossesIIValSecIV==null || this.state.MyAIsystemleadsignificantfinanciallossesIIValSecIV=='')
             {

              alert('Please Select the AI system lead to significant financial losses, legal liabilities, or damage to others');


             }

             else if(this.state.MyAIsystemimpactCapcosapplicablelawsIIValSecIV==null || this.state.MyAIsystemimpactCapcosapplicablelawsIIValSecIV=='')
             {
            alert('Please Select a failure of the AI system impact Capcos ability to comply with applicable laws or regulations in a serious way')

             }

             else if(this.state.MyAIcomponentrepresentsignificantinvestmentIIValSecIV==null || this.state.MyAIcomponentrepresentsignificantinvestmentIIValSecIV=='')
             {

              alert('Please Select the AI component represent a significant investment or hold strategic importance for Capco')

             }

             //last

             else if(this.state.MyAIsystemsuggestinherenthighrisksIIValSecIV==null || this.state.MyAIsystemsuggestinherenthighrisksIIValSecIV=='')
             {
alert('Please Select the characteristics of the AI system suggest that there are inherent high risks that must be considered')

             }

             else if(this.state.MyAISystemdeployedSecIV==null || this.state.MyAISystemdeployedSecIV=='')
             {

              alert('Please Select the AI system be deployed in any of the following regulated sectors')


             }

             else if(this.state.MyAISharepointSecV==null || this.state.MyAISharepointSecV=='')
             {

              alert('Please Select In spite of other responses in the High Risk category, does the AI system pose no significant risk of harm to individuals health, safety or fundamental rights')


             }

             else if(this.state.MyAIsystemGenerativeSecV==null || this.state.MyAIsystemGenerativeSecV=='')
              {

                alert('Please Select the AI system use Generative AI or LLMs')


              }

              else if(this.state.MyBusinessUseCaseSecV==null || this.state.MyBusinessUseCaseSecV=='')
              {

                alert('Please Select  links to AI project/system Business Use Case and Requirements Specification documentation')
              }


              else if(this.state.MyAIprojectArchitecureCaseSecV==null || this.state.MyAIprojectArchitecureCaseSecV=='')
              {

                alert('Please Select  links to AI project/system Architecture and Design Specification documentation')
              }

              else if(this.state.MySharepointCaseSecV==null || this.state.MySharepointCaseSecV=='')
              {
                alert('Please Select   links to Sharepoint, Teams or other additional sources of project documentation')


              }

             //end

             else
             {

              this._service.SaveSectionIII(

               //seci
               this.state.ProjSystemName,
               this.state.MyProjectClassVal,
               this.state.Purpose,
               (this.state.BussinessownerEmailArray),
              (this.state.TechnicalOwnerEmailArray),
               this.state.MyGeographyVal,
               //this.state.Listgoes,
               this.state.MyCapcoDomainVal,
               this.state.Client,
               this.state.SalesId,
               this.state.MyProjectStage,
               this.state.ScopeofProject,
               this.state.NotScopeofProject,
               this.state.Evidenceofresearch,
               this.state.MyProjectClassifications,


               //end


                this.state.MyAISytemCaptureSectionIIValtxt,
                this.state.MyAISystemArgumenStectionIIValtxt,
                this.state.MyAIsystemCCTVfootageSectionIIValtxt,
                this.state.MyAIsystemrelySectionIIValtxt,
                this.state.MyAISysteminferemotionsSectionIIValtxt,

                this.state.MyAISystembiometricSectionIIValtxt,
                this.state.MyAIsystemriskassessmentsSectionIIValtxt,
                this.state.MyAISystemSocialScoringsSectionIIValtxt,
                this.state.MyAISystemEngageSectionIIValtxt,
                this.state.MyAIsystemleagalSectionIIValtxt,

                this.state.MyAIsysteminfluenceSectionIIValtxt,
                this.state.MyAIsystemcriminalSectionIIValtxt,
                this.state.MyAIsystembiometricSectionIIValtxt,
                this.state.MyAIsystemexploitSectionIIValtxt,

                //High RISK AI
                this.state.MyAIsystemindividualiseligibleIIValSecIVtxt,
                this.state.MyAIsystemeducationevaluateprogressIIValSecIVtxt,
                this.state.MyAIsystemassesseligibilityemploymentIIValSecIVtxt,
                this.state.MyAIsystemprofileindividualsIIValSecIVtxt,
                this.state.MyAIsystemoperatecontrolrobotsIIValSecIVtxt,

                //Check2

                this.state.MyAIsystemtrainedthirdpartyrestrictedIIValSecIVtxt,
                this.state.MyAIsystemdecisionscontrolactionssignificantlyIIValSecIVtxt,
                this.state.MyAIsystemdividualsconcerninghighlysensitiveIIValSecIVtxt,
                this.state.MyAIsystemcriticaloperatingessentialinfrastructureIIValSecIVtxt,
                this.state.MyAIsystemincreasedsignificantnegativeIIValSecIVtxt,

                //END

                this.state.MyAIsystemleadsignificantfinanciallossesIIValSecIVtxt,
                this.state.MyAIsystemimpactCapcosapplicablelawsIIValSecIVtxt,
                this.state.MyAIcomponentrepresentsignificantinvestmentIIValSecIVtxt,


                this.state.MyAIsystemsuggestinherenthighrisksIIValSecIVtxt,
                this.state.MyAISystemdeployedSecIVtxt,
                this.state.MyAISharepointSecVtxt,

                //END

                //SECIII
                this.state.MyAIsystemGenerativetextSecV,
                this.state.MyBusinessUseCaseSecV,
                this.state.MyAIprojectArchitecureCaseSecV,
                this.state.MySharepointCaseSecV,
                this.state.ArumentSecIItxt,

                //END

                


                ).then(function (data:any)
                    {
                
                    });


             }

             //END


            }


            private async getSectionIdetails()
            {

              myitemId = this.getParam('SID');

              myitemId.replace("",'');
          
              let ItemInfo = await this._service.getItemByID(myitemId);
              ItemInfoStatus=ItemInfo.SubmissionStatus;

              console.log(ItemInfo);
          
              if(myitemId!="")
              {

                if (ItemInfo.SubmissionStatus=='SecI') 
                  {


                    this.setState({SecIDisableAfterSave:true})
                    this.setState({ProjSystemName:ItemInfo.ProjectSystemName})
                    this.setState({MyProjectClassValText:ItemInfo.ProjectClassification.Title})
                    this.setState({Purpose:ItemInfo.Whatisthepurposeandkeyconcept_x0})
                    this.setState({BussinessOwnerName:ItemInfo.BusinessOwner[0].EMail});
                    this.setState({TechnicalOwnerName:ItemInfo.TechnicalOwner[0].EMail});
                    this.setState({MyGeographyVal:ItemInfo.Geography.Title})
                    this.setState({MyCapcoDomainVal:ItemInfo.CapcoDomain.Title})
                    this.setState({Client:ItemInfo.Client})
                    this.setState({SalesId:ItemInfo.SalesAppOpportunityID})
                    this.setState({MyProjectStage:ItemInfo.ProjectStage.Title})
                    this.setState({ScopeofProject:ItemInfo.Scopeofproject_x002f_system})
                    this.setState({NotScopeofProject:ItemInfo.Notinscopeofproject_x002f_system})
                    this.setState({Evidenceofresearch:ItemInfo.Evidenceofresearch})
                    this.setState({MyProjectClassifications:ItemInfo.Project_x0020_Classifications});

                  }

                  
                  else if(ItemInfo.SubmissionStatus=='Request')
                  {

                    this.setState({showRequestSectionIIIbutton:true})
                    //this.setState({showApprovalbuttons:false});
                    //this.setState({ProjectClasssText:ItemInfo.ProjectClassification.Title})
                    this.setState({ProjSystemName:ItemInfo.ProjectSystemName});
                    this.setState({Purpose:ItemInfo.Whatisthepurposeandkeyconcept_x0});
                    this.setState({BussinessOwnerName:ItemInfo.BusinessOwner[0].EMail});
                    this.setState({TechnicalOwnerName:ItemInfo.TechnicalOwner[0].EMail});
                    this.setState({MyGeographyVal:ItemInfo.Geography.Title});
                    this.setState({MyCapcoDomainVal:ItemInfo.CapcoDomain.Title});
                    this.setState({Client:ItemInfo.Client});
                    this.setState({SalesId:ItemInfo.SalesAppOpportunityID});
                    this.setState({MyProjectStage:ItemInfo.ProjectStage.Title});
                    this.setState({ScopeofProject:ItemInfo.Scopeofproject_x002f_system});
                    this.setState({NotScopeofProject:ItemInfo.Notinscopeofproject_x002f_system});
                    this.setState({Evidenceofresearch:ItemInfo.Evidenceofresearch});
                    this.setState({MyProjectClassifications:ItemInfo.Project_x0020_Classifications});
                    //END

                    //SecII

                    this.setState({MyAISytemCaptureSectionIIVal:ItemInfo.WilltheAIsystemcapture_x002c_sto})
                    this.setState({MyAISystemArgumenStectionIIVal:ItemInfo.WilltheAIsystembeaugmentedwithCa})
                    this.setState({MyDescribewhatandhow: ItemInfo.PleaseDescribeWhatandHow})

                    this.setState({MyAIsystemCCTVfootageSectionIIVal: ItemInfo.DoestheAIsystemrelyontheuntarget})
                    this.setState({MyAIsystemrelySectionIIVal: ItemInfo.DoestheAIsystemrelyonsubliminal_})
                    this.setState({MyAISysteminferemotionsSectionIIVal: ItemInfo.DoestheAIsystemrelyonsubliminal_})
                    this.setState({MyAISystembiometricSectionIIVal:ItemInfo.DoestheAIsystemusebiometricdatat})
                    this.setState({MyAIsystemriskassessmentsSectionIIVal:ItemInfo.DoestheAIsystemmakeriskassessmen})

                    this.setState({MyAISystemSocialScoringsSectionIIVal:ItemInfo.IstheAIsysteminvolvedinsocialsco})
                    this.setState({MyAIsystemleagalSectionIIVal:ItemInfo.DoestheAIsystemmakesignificantle})
                    this.setState({MyAIsysteminfluenceSectionIIVal:ItemInfo.IstheAIsystemdesignedtoinfluence})
                    this.setState({MyAIsystemcriminalSectionIIVal:ItemInfo.DoestheAIsystemmakecriminalriska})
                    this.setState({MyAIsystembiometricSectionIIVal:ItemInfo.DoestheAIsystemusereal_x002d_tim})

                    this.setState({MyAIsystemexploitSectionIIVal:ItemInfo.DoestheAIsystemexploitvulnerabil})

                    // //High Risk AI

                    this.setState({MyAIsystemindividualiseligibleIIValSecIV:ItemInfo.WilltheAIsystembeusedtoassesswhe})
                    this.setState({MyAIsystemeducationevaluateprogressIIValSecIV:ItemInfo.WilltheAIsystembeusedtodetermine})
                    this.setState({MyAIsystemassesseligibilityemploymentIIValSecIV:ItemInfo.WilltheAIsystembeusedtoassesseli})

                    this.setState({MyAIsystemprofileindividualsIIValSecIV:ItemInfo.WilltheAIsystembeusedtoprofilein})
                    this.setState({MyAIsystemoperatecontrolrobotsIIValSecIV:ItemInfo.WilltheAIsystembeusedtooperateor})
                    this.setState({MyAIsystemtrainedthirdpartyrestrictedIIValSecIV:ItemInfo.WilltheAIsystembetrainedusingthi})
                    this.setState({MyAIsystemdecisionscontrolactionssignificantlyIIValSecIV:ItemInfo.WilltheAIsystemmakedecisionsorco})
                    this.setState({MyAIsystemdividualsconcerninghighlysensitiveIIValSecIV:ItemInfo.WilltheAIsysteminteractwithalarg})
                    this.setState({MyAIsystemcriticaloperatingessentialinfrastructureIIValSecIV:ItemInfo.WilltheAIsystemplayacriticalrole})
                    
                    this.setState({MyAIsystemincreasedsignificantnegativeIIValSecIV:ItemInfo.DoestheuseoftheAIsystemposeaninc})
                    this.setState({MyAIsystemleadsignificantfinanciallossesIIValSecIV:ItemInfo.CouldafailureoftheAIsystemleadto})
                    this.setState({MyAIsystemimpactCapcosapplicablelawsIIValSecIV:ItemInfo.CouldafailureoftheAIsystemimpact})
                    this.setState({MyAIcomponentrepresentsignificantinvestmentIIValSecIV:ItemInfo.DoestheAIcomponentrepresentasign})
                    this.setState({MyAIsystemsuggestinherenthighrisksIIValSecIV:ItemInfo.DothecharacteristicsoftheAIsyste})
                    this.setState({MyAISystemdeployedSecIV:ItemInfo.WTest})
                    this.setState({MyAISharepointSecV:ItemInfo.InspiteofotherresponsesintheHigh})  



                  }

                 
                    else if(ItemInfo.SubmissionStatus=='PendingLevel1' && this.state.GroupExsits1==true)
                    {


                      // this.setState({showRequestSectionIIIbutton:false})
                      // this.setState({showRequestSectionIIIbutton:false});
                      this.setState({showApprovalbuttons:true});
                      // this.setState({SecIDisableAfterSave:false});
                      // this.setState({SecIDisableAfterSave:true});
                      this.setState({ProjSystemName:ItemInfo.ProjectSystemName});
                      this.setState({Purpose:ItemInfo.Whatisthepurposeandkeyconcept_x0});
                      this.setState({BussinessOwnerName:ItemInfo.BusinessOwner[0].EMail});
                      this.setState({TechnicalOwnerName:ItemInfo.TechnicalOwner[0].EMail});
                      this.setState({MyGeographyVal:ItemInfo.Geography.Title});
                      this.setState({MyCapcoDomainVal:ItemInfo.CapcoDomain.Title});
                      this.setState({Client:ItemInfo.Client});
                      this.setState({SalesId:ItemInfo.SalesAppOpportunityID});
                      this.setState({MyProjectStage:ItemInfo.ProjectStage.Title});
                      this.setState({ScopeofProject:ItemInfo.Scopeofproject_x002f_system});
                      this.setState({NotScopeofProject:ItemInfo.Notinscopeofproject_x002f_system});
                      this.setState({Evidenceofresearch:ItemInfo.Evidenceofresearch});
                      this.setState({MyProjectClassifications:ItemInfo.Project_x0020_Classifications});
                      //END
  
                      //SecII
  
                      this.setState({MyAISytemCaptureSectionIIVal:ItemInfo.WilltheAIsystemcapture_x002c_sto})
                      this.setState({MyAISystemArgumenStectionIIVal:ItemInfo.WilltheAIsystembeaugmentedwithCa})
                      this.setState({MyDescribewhatandhow: ItemInfo.PleaseDescribeWhatandHow})
  
                      this.setState({MyAIsystemCCTVfootageSectionIIVal: ItemInfo.DoestheAIsystemrelyontheuntarget})
                      this.setState({MyAIsystemrelySectionIIVal: ItemInfo.DoestheAIsystemrelyonsubliminal_})
                      this.setState({MyAISysteminferemotionsSectionIIVal: ItemInfo.DoestheAIsystemrelyonsubliminal_})
                      this.setState({MyAISystembiometricSectionIIVal:ItemInfo.DoestheAIsystemusebiometricdatat})
                      this.setState({MyAIsystemriskassessmentsSectionIIVal:ItemInfo.DoestheAIsystemmakeriskassessmen})
  
                      this.setState({MyAISystemSocialScoringsSectionIIVal:ItemInfo.IstheAIsysteminvolvedinsocialsco})
                      this.setState({MyAIsystemleagalSectionIIVal:ItemInfo.DoestheAIsystemmakesignificantle})
                      this.setState({MyAIsysteminfluenceSectionIIVal:ItemInfo.IstheAIsystemdesignedtoinfluence})
                      this.setState({MyAIsystemcriminalSectionIIVal:ItemInfo.DoestheAIsystemmakecriminalriska})
                      this.setState({MyAIsystembiometricSectionIIVal:ItemInfo.DoestheAIsystemusereal_x002d_tim})
  
                      this.setState({MyAIsystemexploitSectionIIVal:ItemInfo.DoestheAIsystemexploitvulnerabil})
  
                      // //High Risk AI
  
                      this.setState({MyAIsystemindividualiseligibleIIValSecIV:ItemInfo.WilltheAIsystembeusedtoassesswhe})
                      this.setState({MyAIsystemeducationevaluateprogressIIValSecIV:ItemInfo.WilltheAIsystembeusedtodetermine})
                      this.setState({MyAIsystemassesseligibilityemploymentIIValSecIV:ItemInfo.WilltheAIsystembeusedtoassesseli})
  
                      this.setState({MyAIsystemprofileindividualsIIValSecIV:ItemInfo.WilltheAIsystembeusedtoprofilein})
                      this.setState({MyAIsystemoperatecontrolrobotsIIValSecIV:ItemInfo.WilltheAIsystembeusedtooperateor})
                      this.setState({MyAIsystemtrainedthirdpartyrestrictedIIValSecIV:ItemInfo.WilltheAIsystembetrainedusingthi})
                      this.setState({MyAIsystemdecisionscontrolactionssignificantlyIIValSecIV:ItemInfo.WilltheAIsystemmakedecisionsorco})
                      this.setState({MyAIsystemdividualsconcerninghighlysensitiveIIValSecIV:ItemInfo.WilltheAIsysteminteractwithalarg})
                      this.setState({MyAIsystemcriticaloperatingessentialinfrastructureIIValSecIV:ItemInfo.WilltheAIsystemplayacriticalrole})
                      
                      this.setState({MyAIsystemincreasedsignificantnegativeIIValSecIV:ItemInfo.DoestheuseoftheAIsystemposeaninc})
                      this.setState({MyAIsystemleadsignificantfinanciallossesIIValSecIV:ItemInfo.CouldafailureoftheAIsystemleadto})
                      this.setState({MyAIsystemimpactCapcosapplicablelawsIIValSecIV:ItemInfo.CouldafailureoftheAIsystemimpact})
                      this.setState({MyAIcomponentrepresentsignificantinvestmentIIValSecIV:ItemInfo.DoestheAIcomponentrepresentasign})
                      this.setState({MyAIsystemsuggestinherenthighrisksIIValSecIV:ItemInfo.DothecharacteristicsoftheAIsyste})
                      this.setState({MyAISystemdeployedSecIV:ItemInfo.WTest})
                      this.setState({MyAISharepointSecV:ItemInfo.InspiteofotherresponsesintheHigh})  


                    }

                    //Need to devlope

                    else if(this.state.GroupExsits2==false || this.state.GroupExsits1==false)
                      {
  
  
                        this.setState({showApprovalbuttons:false});
                        this.setState({SecClosed:true});
                        this.setState({ProjSystemName:ItemInfo.ProjectSystemName});
                        this.setState({Purpose:ItemInfo.Whatisthepurposeandkeyconcept_x0});
                        this.setState({BussinessOwnerName:ItemInfo.BusinessOwner[0].EMail});
                        this.setState({TechnicalOwnerName:ItemInfo.TechnicalOwner[0].EMail});
                        this.setState({MyGeographyVal:ItemInfo.Geography.Title});
                        this.setState({MyCapcoDomainVal:ItemInfo.CapcoDomain.Title});
                        this.setState({Client:ItemInfo.Client});
                        this.setState({SalesId:ItemInfo.SalesAppOpportunityID});
                        this.setState({MyProjectStage:ItemInfo.ProjectStage.Title});
                        this.setState({ScopeofProject:ItemInfo.Scopeofproject_x002f_system});
                        this.setState({NotScopeofProject:ItemInfo.Notinscopeofproject_x002f_system});
                        this.setState({Evidenceofresearch:ItemInfo.Evidenceofresearch});
                        this.setState({MyProjectClassifications:ItemInfo.Project_x0020_Classifications});
                        //END
    
                        //SecII
    
                        this.setState({MyAISytemCaptureSectionIIVal:ItemInfo.WilltheAIsystemcapture_x002c_sto})
                        this.setState({MyAISystemArgumenStectionIIVal:ItemInfo.WilltheAIsystembeaugmentedwithCa})
                        this.setState({MyDescribewhatandhow: ItemInfo.PleaseDescribeWhatandHow})
    
                        this.setState({MyAIsystemCCTVfootageSectionIIVal: ItemInfo.DoestheAIsystemrelyontheuntarget})
                        this.setState({MyAIsystemrelySectionIIVal: ItemInfo.DoestheAIsystemrelyonsubliminal_})
                        this.setState({MyAISysteminferemotionsSectionIIVal: ItemInfo.DoestheAIsystemrelyonsubliminal_})
                        this.setState({MyAISystembiometricSectionIIVal:ItemInfo.DoestheAIsystemusebiometricdatat})
                        this.setState({MyAIsystemriskassessmentsSectionIIVal:ItemInfo.DoestheAIsystemmakeriskassessmen})
    
                        this.setState({MyAISystemSocialScoringsSectionIIVal:ItemInfo.IstheAIsysteminvolvedinsocialsco})
                        this.setState({MyAIsystemleagalSectionIIVal:ItemInfo.DoestheAIsystemmakesignificantle})
                        this.setState({MyAIsysteminfluenceSectionIIVal:ItemInfo.IstheAIsystemdesignedtoinfluence})
                        this.setState({MyAIsystemcriminalSectionIIVal:ItemInfo.DoestheAIsystemmakecriminalriska})
                        this.setState({MyAIsystembiometricSectionIIVal:ItemInfo.DoestheAIsystemusereal_x002d_tim})
    
                        this.setState({MyAIsystemexploitSectionIIVal:ItemInfo.DoestheAIsystemexploitvulnerabil})
    
                        // //High Risk AI
    
                        this.setState({MyAIsystemindividualiseligibleIIValSecIV:ItemInfo.WilltheAIsystembeusedtoassesswhe})
                        this.setState({MyAIsystemeducationevaluateprogressIIValSecIV:ItemInfo.WilltheAIsystembeusedtodetermine})
                        this.setState({MyAIsystemassesseligibilityemploymentIIValSecIV:ItemInfo.WilltheAIsystembeusedtoassesseli})
    
                        this.setState({MyAIsystemprofileindividualsIIValSecIV:ItemInfo.WilltheAIsystembeusedtoprofilein})
                        this.setState({MyAIsystemoperatecontrolrobotsIIValSecIV:ItemInfo.WilltheAIsystembeusedtooperateor})
                        this.setState({MyAIsystemtrainedthirdpartyrestrictedIIValSecIV:ItemInfo.WilltheAIsystembetrainedusingthi})
                        this.setState({MyAIsystemdecisionscontrolactionssignificantlyIIValSecIV:ItemInfo.WilltheAIsystemmakedecisionsorco})
                        this.setState({MyAIsystemdividualsconcerninghighlysensitiveIIValSecIV:ItemInfo.WilltheAIsysteminteractwithalarg})
                        this.setState({MyAIsystemcriticaloperatingessentialinfrastructureIIValSecIV:ItemInfo.WilltheAIsystemplayacriticalrole})
                        
                        this.setState({MyAIsystemincreasedsignificantnegativeIIValSecIV:ItemInfo.DoestheuseoftheAIsystemposeaninc})
                        this.setState({MyAIsystemleadsignificantfinanciallossesIIValSecIV:ItemInfo.CouldafailureoftheAIsystemleadto})
                        this.setState({MyAIsystemimpactCapcosapplicablelawsIIValSecIV:ItemInfo.CouldafailureoftheAIsystemimpact})
                        this.setState({MyAIcomponentrepresentsignificantinvestmentIIValSecIV:ItemInfo.DoestheAIcomponentrepresentasign})
                        this.setState({MyAIsystemsuggestinherenthighrisksIIValSecIV:ItemInfo.DothecharacteristicsoftheAIsyste})
                        this.setState({MyAISystemdeployedSecIV:ItemInfo.WTest})
                        this.setState({MyAISharepointSecV:ItemInfo.InspiteofotherresponsesintheHigh})  
  
  
                      }

                    //END

                    else if(ItemInfo.SubmissionStatus=='Level1Approved' && this.state.GroupExsits2==true)
                      {
  
                        this.setState({showApprovalbuttonsLevel2:true});
                        this.setState({ProjSystemName:ItemInfo.ProjectSystemName});
                        this.setState({Purpose:ItemInfo.Whatisthepurposeandkeyconcept_x0});
                        this.setState({BussinessOwnerName:ItemInfo.BusinessOwner[0].EMail});
                        this.setState({TechnicalOwnerName:ItemInfo.TechnicalOwner[0].EMail});
                        this.setState({MyGeographyVal:ItemInfo.Geography.Title});
                        this.setState({MyCapcoDomainVal:ItemInfo.CapcoDomain.Title});
                        this.setState({Client:ItemInfo.Client});
                        this.setState({SalesId:ItemInfo.SalesAppOpportunityID});
                        this.setState({MyProjectStage:ItemInfo.ProjectStage.Title});
                        this.setState({ScopeofProject:ItemInfo.Scopeofproject_x002f_system});
                        this.setState({NotScopeofProject:ItemInfo.Notinscopeofproject_x002f_system});
                        this.setState({Evidenceofresearch:ItemInfo.Evidenceofresearch});
                        this.setState({MyProjectClassifications:ItemInfo.Project_x0020_Classifications});
                        //END
    
                        //SecII
    
                        this.setState({MyAISytemCaptureSectionIIVal:ItemInfo.WilltheAIsystemcapture_x002c_sto})
                        this.setState({MyAISystemArgumenStectionIIVal:ItemInfo.WilltheAIsystembeaugmentedwithCa})
                        this.setState({MyDescribewhatandhow: ItemInfo.PleaseDescribeWhatandHow})
    
                        this.setState({MyAIsystemCCTVfootageSectionIIVal: ItemInfo.DoestheAIsystemrelyontheuntarget})
                        this.setState({MyAIsystemrelySectionIIVal: ItemInfo.DoestheAIsystemrelyonsubliminal_})
                        this.setState({MyAISysteminferemotionsSectionIIVal: ItemInfo.DoestheAIsystemrelyonsubliminal_})
                        this.setState({MyAISystembiometricSectionIIVal:ItemInfo.DoestheAIsystemusebiometricdatat})
                        this.setState({MyAIsystemriskassessmentsSectionIIVal:ItemInfo.DoestheAIsystemmakeriskassessmen})
    
                        this.setState({MyAISystemSocialScoringsSectionIIVal:ItemInfo.IstheAIsysteminvolvedinsocialsco})
                        this.setState({MyAIsystemleagalSectionIIVal:ItemInfo.DoestheAIsystemmakesignificantle})
                        this.setState({MyAIsysteminfluenceSectionIIVal:ItemInfo.IstheAIsystemdesignedtoinfluence})
                        this.setState({MyAIsystemcriminalSectionIIVal:ItemInfo.DoestheAIsystemmakecriminalriska})
                        this.setState({MyAIsystembiometricSectionIIVal:ItemInfo.DoestheAIsystemusereal_x002d_tim})
    
                        this.setState({MyAIsystemexploitSectionIIVal:ItemInfo.DoestheAIsystemexploitvulnerabil})
    
                        // //High Risk AI
    
                        this.setState({MyAIsystemindividualiseligibleIIValSecIV:ItemInfo.WilltheAIsystembeusedtoassesswhe})
                        this.setState({MyAIsystemeducationevaluateprogressIIValSecIV:ItemInfo.WilltheAIsystembeusedtodetermine})
                        this.setState({MyAIsystemassesseligibilityemploymentIIValSecIV:ItemInfo.WilltheAIsystembeusedtoassesseli})
    
                        this.setState({MyAIsystemprofileindividualsIIValSecIV:ItemInfo.WilltheAIsystembeusedtoprofilein})
                        this.setState({MyAIsystemoperatecontrolrobotsIIValSecIV:ItemInfo.WilltheAIsystembeusedtooperateor})
                        this.setState({MyAIsystemtrainedthirdpartyrestrictedIIValSecIV:ItemInfo.WilltheAIsystembetrainedusingthi})
                        this.setState({MyAIsystemdecisionscontrolactionssignificantlyIIValSecIV:ItemInfo.WilltheAIsystemmakedecisionsorco})
                        this.setState({MyAIsystemdividualsconcerninghighlysensitiveIIValSecIV:ItemInfo.WilltheAIsysteminteractwithalarg})
                        this.setState({MyAIsystemcriticaloperatingessentialinfrastructureIIValSecIV:ItemInfo.WilltheAIsystemplayacriticalrole})
                        
                        this.setState({MyAIsystemincreasedsignificantnegativeIIValSecIV:ItemInfo.DoestheuseoftheAIsystemposeaninc})
                        this.setState({MyAIsystemleadsignificantfinanciallossesIIValSecIV:ItemInfo.CouldafailureoftheAIsystemleadto})
                        this.setState({MyAIsystemimpactCapcosapplicablelawsIIValSecIV:ItemInfo.CouldafailureoftheAIsystemimpact})
                        this.setState({MyAIcomponentrepresentsignificantinvestmentIIValSecIV:ItemInfo.DoestheAIcomponentrepresentasign})
                        this.setState({MyAIsystemsuggestinherenthighrisksIIValSecIV:ItemInfo.DothecharacteristicsoftheAIsyste})
                        this.setState({MyAISystemdeployedSecIV:ItemInfo.WTest})
                        this.setState({MyAISharepointSecV:ItemInfo.InspiteofotherresponsesintheHigh})  
  
  
                      }

                      else if(ItemInfo.SubmissionStatus=='Level1Approved' && this.state.GroupExsits1==true)
                        {
    
                          this.setState({showApprovalbuttonsLevel2:false});
                          //this.setState({SecClosed:true});
                          this.setState({ProjSystemName:ItemInfo.ProjectSystemName});
                          this.setState({Purpose:ItemInfo.Whatisthepurposeandkeyconcept_x0});
                          this.setState({BussinessOwnerName:ItemInfo.BusinessOwner[0].EMail});
                          this.setState({TechnicalOwnerName:ItemInfo.TechnicalOwner[0].EMail});
                          this.setState({MyGeographyVal:ItemInfo.Geography.Title});
                          this.setState({MyCapcoDomainVal:ItemInfo.CapcoDomain.Title});
                          this.setState({Client:ItemInfo.Client});
                          this.setState({SalesId:ItemInfo.SalesAppOpportunityID});
                          this.setState({MyProjectStage:ItemInfo.ProjectStage.Title});
                          this.setState({ScopeofProject:ItemInfo.Scopeofproject_x002f_system});
                          this.setState({NotScopeofProject:ItemInfo.Notinscopeofproject_x002f_system});
                          this.setState({Evidenceofresearch:ItemInfo.Evidenceofresearch});
                          this.setState({MyProjectClassifications:ItemInfo.Project_x0020_Classifications});
                          //END
      
                          //SecII
      
                          this.setState({MyAISytemCaptureSectionIIVal:ItemInfo.WilltheAIsystemcapture_x002c_sto})
                          this.setState({MyAISystemArgumenStectionIIVal:ItemInfo.WilltheAIsystembeaugmentedwithCa})
                          this.setState({MyDescribewhatandhow: ItemInfo.PleaseDescribeWhatandHow})
      
                          this.setState({MyAIsystemCCTVfootageSectionIIVal: ItemInfo.DoestheAIsystemrelyontheuntarget})
                          this.setState({MyAIsystemrelySectionIIVal: ItemInfo.DoestheAIsystemrelyonsubliminal_})
                          this.setState({MyAISysteminferemotionsSectionIIVal: ItemInfo.DoestheAIsystemrelyonsubliminal_})
                          this.setState({MyAISystembiometricSectionIIVal:ItemInfo.DoestheAIsystemusebiometricdatat})
                          this.setState({MyAIsystemriskassessmentsSectionIIVal:ItemInfo.DoestheAIsystemmakeriskassessmen})
      
                          this.setState({MyAISystemSocialScoringsSectionIIVal:ItemInfo.IstheAIsysteminvolvedinsocialsco})
                          this.setState({MyAIsystemleagalSectionIIVal:ItemInfo.DoestheAIsystemmakesignificantle})
                          this.setState({MyAIsysteminfluenceSectionIIVal:ItemInfo.IstheAIsystemdesignedtoinfluence})
                          this.setState({MyAIsystemcriminalSectionIIVal:ItemInfo.DoestheAIsystemmakecriminalriska})
                          this.setState({MyAIsystembiometricSectionIIVal:ItemInfo.DoestheAIsystemusereal_x002d_tim})
      
                          this.setState({MyAIsystemexploitSectionIIVal:ItemInfo.DoestheAIsystemexploitvulnerabil})
      
                          // //High Risk AI
      
                          this.setState({MyAIsystemindividualiseligibleIIValSecIV:ItemInfo.WilltheAIsystembeusedtoassesswhe})
                          this.setState({MyAIsystemeducationevaluateprogressIIValSecIV:ItemInfo.WilltheAIsystembeusedtodetermine})
                          this.setState({MyAIsystemassesseligibilityemploymentIIValSecIV:ItemInfo.WilltheAIsystembeusedtoassesseli})
      
                          this.setState({MyAIsystemprofileindividualsIIValSecIV:ItemInfo.WilltheAIsystembeusedtoprofilein})
                          this.setState({MyAIsystemoperatecontrolrobotsIIValSecIV:ItemInfo.WilltheAIsystembeusedtooperateor})
                          this.setState({MyAIsystemtrainedthirdpartyrestrictedIIValSecIV:ItemInfo.WilltheAIsystembetrainedusingthi})
                          this.setState({MyAIsystemdecisionscontrolactionssignificantlyIIValSecIV:ItemInfo.WilltheAIsystemmakedecisionsorco})
                          this.setState({MyAIsystemdividualsconcerninghighlysensitiveIIValSecIV:ItemInfo.WilltheAIsysteminteractwithalarg})
                          this.setState({MyAIsystemcriticaloperatingessentialinfrastructureIIValSecIV:ItemInfo.WilltheAIsystemplayacriticalrole})
                          
                          this.setState({MyAIsystemincreasedsignificantnegativeIIValSecIV:ItemInfo.DoestheuseoftheAIsystemposeaninc})
                          this.setState({MyAIsystemleadsignificantfinanciallossesIIValSecIV:ItemInfo.CouldafailureoftheAIsystemleadto})
                          this.setState({MyAIsystemimpactCapcosapplicablelawsIIValSecIV:ItemInfo.CouldafailureoftheAIsystemimpact})
                          this.setState({MyAIcomponentrepresentsignificantinvestmentIIValSecIV:ItemInfo.DoestheAIcomponentrepresentasign})
                          this.setState({MyAIsystemsuggestinherenthighrisksIIValSecIV:ItemInfo.DothecharacteristicsoftheAIsyste})
                          this.setState({MyAISystemdeployedSecIV:ItemInfo.WTest})
                          this.setState({MyAISharepointSecV:ItemInfo.InspiteofotherresponsesintheHigh})  
    
    
                        }

                     

                      else if(ItemInfo.SubmissionStatus=='Level2Approved')
                        {
    
                          this.setState({ShowLastSubmit:true});
                          this.setState({MySavedProjectClassVal:ItemInfo.Project_x0020_Classifications});
                          this.setState({ProjSystemName:ItemInfo.ProjectSystemName});
                          this.setState({Purpose:ItemInfo.Whatisthepurposeandkeyconcept_x0});
                          this.setState({BussinessOwnerName:ItemInfo.BusinessOwner[0].EMail});
                          this.setState({TechnicalOwnerName:ItemInfo.TechnicalOwner[0].EMail});
                          this.setState({MyGeographyVal:ItemInfo.Geography.Title});
                          this.setState({MyCapcoDomainVal:ItemInfo.CapcoDomain.Title});
                          this.setState({Client:ItemInfo.Client});
                          this.setState({SalesId:ItemInfo.SalesAppOpportunityID});
                          this.setState({MyProjectStage:ItemInfo.ProjectStage.Title});
                          this.setState({ScopeofProject:ItemInfo.Scopeofproject_x002f_system});
                          this.setState({NotScopeofProject:ItemInfo.Notinscopeofproject_x002f_system});
                          this.setState({Evidenceofresearch:ItemInfo.Evidenceofresearch});
                          this.setState({MyProjectClassifications:ItemInfo.Project_x0020_Classifications});
                          //END
      
                          //SecII
      
                          this.setState({MyAISytemCaptureSectionIIVal:ItemInfo.WilltheAIsystemcapture_x002c_sto})
                          this.setState({MyAISystemArgumenStectionIIVal:ItemInfo.WilltheAIsystembeaugmentedwithCa})
                          this.setState({MyDescribewhatandhow: ItemInfo.PleaseDescribeWhatandHow})
      
                          this.setState({MyAIsystemCCTVfootageSectionIIVal: ItemInfo.DoestheAIsystemrelyontheuntarget})
                          this.setState({MyAIsystemrelySectionIIVal: ItemInfo.DoestheAIsystemrelyonsubliminal_})
                          this.setState({MyAISysteminferemotionsSectionIIVal: ItemInfo.DoestheAIsystemrelyonsubliminal_})
                          this.setState({MyAISystembiometricSectionIIVal:ItemInfo.DoestheAIsystemusebiometricdatat})
                          this.setState({MyAIsystemriskassessmentsSectionIIVal:ItemInfo.DoestheAIsystemmakeriskassessmen})
      
                          this.setState({MyAISystemSocialScoringsSectionIIVal:ItemInfo.IstheAIsysteminvolvedinsocialsco})
                          this.setState({MyAIsystemleagalSectionIIVal:ItemInfo.DoestheAIsystemmakesignificantle})
                          this.setState({MyAIsysteminfluenceSectionIIVal:ItemInfo.IstheAIsystemdesignedtoinfluence})
                          this.setState({MyAIsystemcriminalSectionIIVal:ItemInfo.DoestheAIsystemmakecriminalriska})
                          this.setState({MyAIsystembiometricSectionIIVal:ItemInfo.DoestheAIsystemusereal_x002d_tim})
      
                          this.setState({MyAIsystemexploitSectionIIVal:ItemInfo.DoestheAIsystemexploitvulnerabil})
      
                          // //High Risk AI
      
                          this.setState({MyAIsystemindividualiseligibleIIValSecIV:ItemInfo.WilltheAIsystembeusedtoassesswhe})
                          this.setState({MyAIsystemeducationevaluateprogressIIValSecIV:ItemInfo.WilltheAIsystembeusedtodetermine})
                          this.setState({MyAIsystemassesseligibilityemploymentIIValSecIV:ItemInfo.WilltheAIsystembeusedtoassesseli})
      
                          this.setState({MyAIsystemprofileindividualsIIValSecIV:ItemInfo.WilltheAIsystembeusedtoprofilein})
                          this.setState({MyAIsystemoperatecontrolrobotsIIValSecIV:ItemInfo.WilltheAIsystembeusedtooperateor})
                          this.setState({MyAIsystemtrainedthirdpartyrestrictedIIValSecIV:ItemInfo.WilltheAIsystembetrainedusingthi})
                          this.setState({MyAIsystemdecisionscontrolactionssignificantlyIIValSecIV:ItemInfo.WilltheAIsystemmakedecisionsorco})
                          this.setState({MyAIsystemdividualsconcerninghighlysensitiveIIValSecIV:ItemInfo.WilltheAIsysteminteractwithalarg})
                          this.setState({MyAIsystemcriticaloperatingessentialinfrastructureIIValSecIV:ItemInfo.WilltheAIsystemplayacriticalrole})
                          
                          this.setState({MyAIsystemincreasedsignificantnegativeIIValSecIV:ItemInfo.DoestheuseoftheAIsystemposeaninc})
                          this.setState({MyAIsystemleadsignificantfinanciallossesIIValSecIV:ItemInfo.CouldafailureoftheAIsystemleadto})
                          this.setState({MyAIsystemimpactCapcosapplicablelawsIIValSecIV:ItemInfo.CouldafailureoftheAIsystemimpact})
                          this.setState({MyAIcomponentrepresentsignificantinvestmentIIValSecIV:ItemInfo.DoestheAIcomponentrepresentasign})
                          this.setState({MyAIsystemsuggestinherenthighrisksIIValSecIV:ItemInfo.DothecharacteristicsoftheAIsyste})
                          this.setState({MyAISystemdeployedSecIV:ItemInfo.WTest})
                          this.setState({MyAISharepointSecV:ItemInfo.InspiteofotherresponsesintheHigh})  
    
    
                        }

                        else if(ItemInfo.SubmissionStatus=='Completed')
                          {
      
                            this.setState({ShowCompleted:true});
                            this.setState({ProjSystemName:ItemInfo.ProjectSystemName});
                            this.setState({Purpose:ItemInfo.Whatisthepurposeandkeyconcept_x0});
                            this.setState({BussinessOwnerName:ItemInfo.BusinessOwner[0].EMail});
                            this.setState({TechnicalOwnerName:ItemInfo.TechnicalOwner[0].EMail});
                            this.setState({MyGeographyVal:ItemInfo.Geography.Title});
                            this.setState({MyCapcoDomainVal:ItemInfo.CapcoDomain.Title});
                            this.setState({Client:ItemInfo.Client});
                            this.setState({SalesId:ItemInfo.SalesAppOpportunityID});
                            this.setState({MyProjectStage:ItemInfo.ProjectStage.Title});
                            this.setState({ScopeofProject:ItemInfo.Scopeofproject_x002f_system});
                            this.setState({NotScopeofProject:ItemInfo.Notinscopeofproject_x002f_system});
                            this.setState({Evidenceofresearch:ItemInfo.Evidenceofresearch});
                            this.setState({MyProjectClassifications:ItemInfo.Project_x0020_Classifications});
                            //END
        
                            //SecII
        
                            this.setState({MyAISytemCaptureSectionIIVal:ItemInfo.WilltheAIsystemcapture_x002c_sto})
                            this.setState({MyAISystemArgumenStectionIIVal:ItemInfo.WilltheAIsystembeaugmentedwithCa})
                            this.setState({MyDescribewhatandhow: ItemInfo.PleaseDescribeWhatandHow})
        
                            this.setState({MyAIsystemCCTVfootageSectionIIVal: ItemInfo.DoestheAIsystemrelyontheuntarget})
                            this.setState({MyAIsystemrelySectionIIVal: ItemInfo.DoestheAIsystemrelyonsubliminal_})
                            this.setState({MyAISysteminferemotionsSectionIIVal: ItemInfo.DoestheAIsystemrelyonsubliminal_})
                            this.setState({MyAISystembiometricSectionIIVal:ItemInfo.DoestheAIsystemusebiometricdatat})
                            this.setState({MyAIsystemriskassessmentsSectionIIVal:ItemInfo.DoestheAIsystemmakeriskassessmen})
        
                            this.setState({MyAISystemSocialScoringsSectionIIVal:ItemInfo.IstheAIsysteminvolvedinsocialsco})
                            this.setState({MyAIsystemleagalSectionIIVal:ItemInfo.DoestheAIsystemmakesignificantle})
                            this.setState({MyAIsysteminfluenceSectionIIVal:ItemInfo.IstheAIsystemdesignedtoinfluence})
                            this.setState({MyAIsystemcriminalSectionIIVal:ItemInfo.DoestheAIsystemmakecriminalriska})
                            this.setState({MyAIsystembiometricSectionIIVal:ItemInfo.DoestheAIsystemusereal_x002d_tim})
        
                            this.setState({MyAIsystemexploitSectionIIVal:ItemInfo.DoestheAIsystemexploitvulnerabil})
        
                            // //High Risk AI
        
                            this.setState({MyAIsystemindividualiseligibleIIValSecIV:ItemInfo.WilltheAIsystembeusedtoassesswhe})
                            this.setState({MyAIsystemeducationevaluateprogressIIValSecIV:ItemInfo.WilltheAIsystembeusedtodetermine})
                            this.setState({MyAIsystemassesseligibilityemploymentIIValSecIV:ItemInfo.WilltheAIsystembeusedtoassesseli})
        
                            this.setState({MyAIsystemprofileindividualsIIValSecIV:ItemInfo.WilltheAIsystembeusedtoprofilein})
                            this.setState({MyAIsystemoperatecontrolrobotsIIValSecIV:ItemInfo.WilltheAIsystembeusedtooperateor})
                            this.setState({MyAIsystemtrainedthirdpartyrestrictedIIValSecIV:ItemInfo.WilltheAIsystembetrainedusingthi})
                            this.setState({MyAIsystemdecisionscontrolactionssignificantlyIIValSecIV:ItemInfo.WilltheAIsystemmakedecisionsorco})
                            this.setState({MyAIsystemdividualsconcerninghighlysensitiveIIValSecIV:ItemInfo.WilltheAIsysteminteractwithalarg})
                            this.setState({MyAIsystemcriticaloperatingessentialinfrastructureIIValSecIV:ItemInfo.WilltheAIsystemplayacriticalrole})
                            
                            this.setState({MyAIsystemincreasedsignificantnegativeIIValSecIV:ItemInfo.DoestheuseoftheAIsystemposeaninc})
                            this.setState({MyAIsystemleadsignificantfinanciallossesIIValSecIV:ItemInfo.CouldafailureoftheAIsystemleadto})
                            this.setState({MyAIsystemimpactCapcosapplicablelawsIIValSecIV:ItemInfo.CouldafailureoftheAIsystemimpact})
                            this.setState({MyAIcomponentrepresentsignificantinvestmentIIValSecIV:ItemInfo.DoestheAIcomponentrepresentasign})
                            this.setState({MyAIsystemsuggestinherenthighrisksIIValSecIV:ItemInfo.DothecharacteristicsoftheAIsyste})
                            this.setState({MyAISystemdeployedSecIV:ItemInfo.WTest})
                            this.setState({MyAISharepointSecV:ItemInfo.InspiteofotherresponsesintheHigh})  

                            
                            this.setState({MyAIsystemGenerativeSecV:ItemInfo.DoestheAIsystemuseGenerativeAIor})
                            this.setState({MyBusinessUseCaseSecV:ItemInfo.ProvidelinkstoAIproject_x002f_sy})
                            this.setState({MyAIprojectArchitecureCaseSecV:ItemInfo.ProvidelinkstoAIproject_x002f_sy0})
                            this.setState({MySharepointCaseSecV:ItemInfo.ProvidelinkstoSharepoint_x002c_T})
      
      
                          }

  
                  else if(ItemInfo.SubmissionStatus=="Closed")
                    {
    
                      this.setState({SecClosed:true});
                      this.setState({ProjSystemName:ItemInfo.ProjectSystemName});
                      this.setState({ProjectClasssText:ItemInfo.ProjectClassification.Title})
                      this.setState({Purpose:ItemInfo.Whatisthepurposeandkeyconcept_x0});
                      this.setState({BussinessOwnerName:ItemInfo.BusinessOwner[0].EMail});
                      this.setState({TechnicalOwnerName:ItemInfo.TechnicalOwner[0].EMail});
                      this.setState({MyGeographyVal:ItemInfo.Geography.Title});
                      this.setState({MyCapcoDomainVal:ItemInfo.CapcoDomain.Title});
                      this.setState({Client:ItemInfo.Client});
                      this.setState({SalesId:ItemInfo.SalesAppOpportunityID});
                      this.setState({MyProjectStage:ItemInfo.ProjectStage.Title});
                      this.setState({ScopeofProject:ItemInfo.Scopeofproject_x002f_system});
                      this.setState({NotScopeofProject:ItemInfo.Notinscopeofproject_x002f_system});
                      this.setState({Evidenceofresearch:ItemInfo.Evidenceofresearch});
                      
                      //END
  
                      //SecII
  
                      this.setState({MyAISytemCaptureSectionIIVal:ItemInfo.WilltheAIsystemcapture_x002c_sto})
                      this.setState({MyAISystemArgumenStectionIIVal:ItemInfo.WilltheAIsystembeaugmentedwithCa})
                      this.setState({MyDescribewhatandhow: ItemInfo.PleaseDescribeWhatandHow})
  
                      this.setState({MyAIsystemCCTVfootageSectionIIVal: ItemInfo.DoestheAIsystemrelyontheuntarget})
                      this.setState({MyAIsystemrelySectionIIVal: ItemInfo.DoestheAIsystemrelyonsubliminal_})
                      this.setState({MyAISysteminferemotionsSectionIIVal: ItemInfo.DoestheAIsystemrelyonsubliminal_})
                      this.setState({MyAISystembiometricSectionIIVal:ItemInfo.DoestheAIsystemusebiometricdatat})
                      this.setState({MyAIsystemriskassessmentsSectionIIVal:ItemInfo.DoestheAIsystemmakeriskassessmen})
  
                      this.setState({MyAISystemSocialScoringsSectionIIVal:ItemInfo.IstheAIsysteminvolvedinsocialsco})
                      this.setState({MyAIsystemleagalSectionIIVal:ItemInfo.DoestheAIsystemmakesignificantle})
                      this.setState({MyAIsysteminfluenceSectionIIVal:ItemInfo.IstheAIsystemdesignedtoinfluence})
                      this.setState({MyAIsystemcriminalSectionIIVal:ItemInfo.DoestheAIsystemmakecriminalriska})
                      this.setState({MyAIsystembiometricSectionIIVal:ItemInfo.DoestheAIsystemusereal_x002d_tim})
  
                      this.setState({MyAIsystemexploitSectionIIVal:ItemInfo.DoestheAIsystemexploitvulnerabil})
  
                      // //High Risk AI
  
                      this.setState({MyAIsystemindividualiseligibleIIValSecIV:ItemInfo.WilltheAIsystembeusedtoassesswhe})
                      this.setState({MyAIsystemeducationevaluateprogressIIValSecIV:ItemInfo.WilltheAIsystembeusedtodetermine})
                      this.setState({MyAIsystemassesseligibilityemploymentIIValSecIV:ItemInfo.WilltheAIsystembeusedtoassesseli})
  
                      this.setState({MyAIsystemprofileindividualsIIValSecIV:ItemInfo.WilltheAIsystembeusedtoprofilein})
                      this.setState({MyAIsystemoperatecontrolrobotsIIValSecIV:ItemInfo.WilltheAIsystembeusedtooperateor})
                      this.setState({MyAIsystemtrainedthirdpartyrestrictedIIValSecIV:ItemInfo.WilltheAIsystembetrainedusingthi})
                      this.setState({MyAIsystemdecisionscontrolactionssignificantlyIIValSecIV:ItemInfo.WilltheAIsystemmakedecisionsorco})
                      this.setState({MyAIsystemdividualsconcerninghighlysensitiveIIValSecIV:ItemInfo.WilltheAIsysteminteractwithalarg})
                      this.setState({MyAIsystemcriticaloperatingessentialinfrastructureIIValSecIV:ItemInfo.WilltheAIsystemplayacriticalrole})
                      
                      this.setState({MyAIsystemincreasedsignificantnegativeIIValSecIV:ItemInfo.DoestheuseoftheAIsystemposeaninc})
                      this.setState({MyAIsystemleadsignificantfinanciallossesIIValSecIV:ItemInfo.CouldafailureoftheAIsystemleadto})
                      this.setState({MyAIsystemimpactCapcosapplicablelawsIIValSecIV:ItemInfo.CouldafailureoftheAIsystemimpact})
                      this.setState({MyAIcomponentrepresentsignificantinvestmentIIValSecIV:ItemInfo.DoestheAIcomponentrepresentasign})
                      this.setState({MyAIsystemsuggestinherenthighrisksIIValSecIV:ItemInfo.DothecharacteristicsoftheAIsyste})
                      this.setState({MyAISystemdeployedSecIV:ItemInfo.WTest})
                      this.setState({MyAISharepointSecV:ItemInfo.InspiteofotherresponsesintheHigh})  
    
                    }

               

              }


            }

          

            private onMessage()
            {

              alert('Record submitted successfully');
              //window.location.reload();
            }

          //END

          //Buttons Click

            private OnSection1BtnClick() :void {


                  this.onSectionISave();
                  this.onMessage();

                  

            }

            private OnRequestSubmit():void {

              this._service.OnRequestSubmit(
        
                myitemId,
                "PendingLevel1",
                this.state.MyProjectClassVal,
                this.state.MyProjectClassifications
               
        
               ).then(function (data:any)
                    {
                
                      console.log(data);
          
                      alert('Record Updated successfully');
                      
                    //window.location.replace("https://capcoinc.sharepoint.com/sites/EnterpriseRiskKeyContactsandOverview/SitePages/AI%20RISK%20Assessment%20Datatable.aspx");
                    });


            }

           
            private OnSectionIIBtnClick():void {

            
              
              this.onSectionIISave();
              this.onMessage();
            }

         

            private OnSectionIIIBtnClick():void {


             this.onSectionIIISave();
            }

          
            //Sec II

            public async getAllOptionsValues() {

              var data = await this._service.GetAllOptionsRequried();
           
               console.log(data);
           
               var AllOptions: any = [];
           
               for (var k in data) {
           
                AllOptions.push({ key: data[k].ID, text: data[k].Title });
               }
           
               console.log(AllOptions);
           
               this.setState({ AIsystemcaptureSectionIIListItems: AllOptions });

               this.setState({ AISystemArgumenStectionIIListItems: AllOptions });

               this.setState({ AIsystemCCTVfootageSectionIIListItems: AllOptions });

               this.setState({ AIsystemrelySectionIIListItems: AllOptions });

               this.setState({  AISysteminferemotionsSectionIIListItems: AllOptions });

               this.setState({  AISystembiometricSectionIIListItems: AllOptions });

               this.setState({  AIsystemriskassessmentsSectionIIListItems: AllOptions });

               this.setState({  AISystemSocialScoringsSectionIIListItems: AllOptions });

               this.setState({  AISystemEngageSectionIIListItems: AllOptions });

               this.setState({  AIsystemSignificantSectionIIListItems: AllOptions });

               this.setState({  AIsystemleagalSectionIIListItems: AllOptions });

               this.setState({  AIsysteminfluenceSectionIIListItems: AllOptions });

               this.setState({  AIsystemcriminalSectionIIListItems: AllOptions });

               this.setState({  AIsystembiometricSectionIIListItems: AllOptions });

               this.setState({  AIsystemexploitSectionIIListItems: AllOptions });

               //HIGH RISK

               this.setState({  AIsystemindividualiseligibleIIListItemsSecIV: AllOptions });
               this.setState({  AIsystemeducationevaluateprogressIIListItemsSecIV: AllOptions });
               this.setState({  AIsystemassesseligibilityemploymentIIListItemsSecIV: AllOptions });
               this.setState({  AIsystemprofileindividualsIIListItemsSecIV: AllOptions });
               this.setState({  AIsystemoperatecontrolrobotsIIListItemsSecIV: AllOptions });
               this.setState({  AIsystemtrainedthirdpartyrestrictedIIListItemsSecIV: AllOptions });
               this.setState({  AIsystemdecisionscontrolactionssignificantlyIIListItemsSecIV: AllOptions });
               this.setState({  AIsystemdividualsconcerninghighlysensitiveIIListItemsSecIV: AllOptions });
               this.setState({  AIsystemcriticaloperatingessentialinfrastructureIIListItemsSecIV: AllOptions });
               this.setState({  AIsystemincreasedsignificantnegativeIIListItemsSecIV: AllOptions });
              this.setState({  AIsystemleadsignificantfinanciallossesIIListItemsSecIV: AllOptions });
              this.setState({  AIsystemimpactCapcosapplicablelawsIIListItemsSecIV: AllOptions });
              this.setState({  AIcomponentrepresentsignificantinvestmentIIListItemsSecIV: AllOptions });
              this.setState({  AIsystemsuggestinherenthighrisksIIListItemsSecIV: AllOptions });
              this.setState({  AISystemdeployedListItemsSecIV: AllOptions });
              this.setState({  AISystemHighRiskListItemsSecIV: AllOptions });


              //END

              //Sec V
              this.setState({  AIsystemGenerativeListItemsSecV: AllOptions });
              this.setState({AIprojectListItemsSecV:AllOptions});

              this.setState({ AIArchitectureListItemsSecV: AllOptions });
              this.setState({AISharepointListItemsSecV:AllOptions});

              

              //END


               //END

             }


             private handleAIsystemcaptureSectionII(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {

    
              this.setState({ MyAISytemCaptureSectionIIVal:item.key });
              this.setState({ MyAISytemCaptureSectionIIValtxt:item.text });
              
                     }

            private handleAISystemArgumenStectionII(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {

    //point
                      this.setState({ MyAISystemArgumenStectionIIVal:item.key });
                      this.setState({ MyAISystemArgumenStectionIIValtxt:item.text });

                      if(item.text=='Yes')
                      {

                        this.setState({MyDescribewhatandhow:false})

                      }

                      else 
                      {
                        this.setState({MyDescribewhatandhow:true})

                      }

                  
            }

//Prohibeted AI

         private handleAISystemCCTVfootageStectionII(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {

    
          this.setState({ MyAIsystemCCTVfootageSectionIIVal:item.key });
          this.setState({ MyAIsystemCCTVfootageSectionIIValtxt:item.text });
      
                 }


        private handleAIsystemrelySectionII(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {

    
                  this.setState({ MyAIsystemrelySectionIIVal:item.key });
                  this.setState({MyAIsystemrelySectionIIValtxt:item.text});
              
                         }


      private handleAISysteminferemotionsSectionII(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {

    
      this.setState({ MyAISysteminferemotionsSectionIIVal:item.key });
      this.setState({ MyAISysteminferemotionsSectionIIValtxt:item.text });
                      
                                 }


      private handleAISystembiometricSectionII(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {

    
      this.setState({ MyAISystembiometricSectionIIVal:item.key });
      this.setState({ MyAISystembiometricSectionIIValtxt:item.text });


                                                  
      }

      private handleAIsystemriskassessmentsSectionII(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {

    
        this.setState({ MyAIsystemriskassessmentsSectionIIVal:item.key });
        this.setState({ MyAIsystemriskassessmentsSectionIIValtxt:item.text });
                                                    
        }

        private handleAISystemSocialScoringsSectionII(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {

    
          this.setState({ MyAISystemSocialScoringsSectionIIVal:item.key });
          this.setState({ MyAISystemSocialScoringsSectionIIValtxt:item.text });
                                                      
          }


          private handleAISystemEngageSectionII(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {

    
            this.setState({ MyAISystemEngageSectionIIVal:item.key });
            this.setState({ MyAISystemEngageSectionIIValtxt:item.text });
                                                        
            }

            
        private handleAIsystemlegalSectionII(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {

    
  this.setState({ MyAIsystemleagalSectionIIVal:item.key });
  this.setState({ MyAIsystemleagalSectionIIValtxt:item.text });
                                              
         }

         private handleAIsysteminfluenceSectionII(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {

    
          this.setState({ MyAIsysteminfluenceSectionIIVal:item.key });
          this.setState({ MyAIsysteminfluenceSectionIIValtxt:item.text });
                                                      
                 }


        private handleAIsystemcriminalSectionII(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {

    
                  this.setState({ MyAIsystemcriminalSectionIIVal:item.key });
                  this.setState({ MyAIsystemcriminalSectionIIValtxt:item.text });
                                                              
                }

          private handleAIsystembiometricSectionII(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {

    
                  this.setState({ MyAIsystembiometricSectionIIVal:item.key });
                  this.setState({ MyAIsystembiometricSectionIIValtxt:item.text });
                                                              
                }

          private handleAIsystemexploitSectionII(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {

    
                  this.setState({ MyAIsystemexploitSectionIIVal:item.key });
                  this.setState({ MyAIsystemexploitSectionIIValtxt:item.text });
                                                              
                }


                //High Risk
                
            private handleAIsystemindividualiseligibleSecIV(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
    
              this.setState({ MyAIsystemindividualiseligibleIIValSecIV:item.key });
              this.setState({ MyAIsystemindividualiseligibleIIValSecIVtxt:item.text });

              }


              private handleAIsystemeducationevaluateprogressSecIV(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
    
                this.setState({ MyAIsystemeducationevaluateprogressIIValSecIV:item.key });
                this.setState({ MyAIsystemeducationevaluateprogressIIValSecIVtxt:item.text });
                }


                private handleAIsystemassesseligibilityemploymentSecIV(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
    
                  this.setState({ MyAIsystemassesseligibilityemploymentIIValSecIV:item.key });
                  this.setState({ MyAIsystemassesseligibilityemploymentIIValSecIVtxt:item.text });
                  }

                  
                  private handleAIsystemprofileindividualsSecIV(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
    
                    this.setState({ MyAIsystemprofileindividualsIIValSecIV:item.key });
                    this.setState({ MyAIsystemprofileindividualsIIValSecIVtxt:item.text });
                    }

                    private handleAIsystemoperatecontrolrobotsSecIV(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
    
                      this.setState({ MyAIsystemoperatecontrolrobotsIIValSecIV:item.key });
                      this.setState({ MyAIsystemoperatecontrolrobotsIIValSecIVtxt:item.text });
                      }


                      private handleAIsystemtrainedthirdpartyrestrictedSecIV(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
    
                        this.setState({ MyAIsystemtrainedthirdpartyrestrictedIIValSecIV:item.key });
                        this.setState({ MyAIsystemtrainedthirdpartyrestrictedIIValSecIVtxt:item.text });
                        }

                        private handleAIsystemdecisionscontrolactionssignificantlySecIV(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
    
                          this.setState({ MyAIsystemdecisionscontrolactionssignificantlyIIValSecIV:item.key });
                          this.setState({ MyAIsystemdecisionscontrolactionssignificantlyIIValSecIVtxt:item.text });
                          }


                          private handleAIsystemdividualsconcerninghighlysensitiveSecIV(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
    
                            this.setState({ MyAIsystemdividualsconcerninghighlysensitiveIIValSecIV:item.key });
                            this.setState({ MyAIsystemdividualsconcerninghighlysensitiveIIValSecIVtxt:item.text });
                            }

                            
                            private handleAIsystemcriticaloperatingessentialinfrastructureSecIV(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
    
                              this.setState({ MyAIsystemcriticaloperatingessentialinfrastructureIIValSecIV:item.key });
                              this.setState({ MyAIsystemcriticaloperatingessentialinfrastructureIIValSecIVtxt:item.text });
                              }
                              
                              private handleAIsystemincreasedsignificantnegativeSecIV(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
    
                                this.setState({ MyAIsystemincreasedsignificantnegativeIIValSecIV:item.key });
                                this.setState({ MyAIsystemincreasedsignificantnegativeIIValSecIVtxt:item.text });
                                }


                                private handleAIsystemleadsignificantfinanciallossesSecIV(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
    
                                  this.setState({ MyAIsystemleadsignificantfinanciallossesIIValSecIV:item.key });
                                  this.setState({ MyAIsystemleadsignificantfinanciallossesIIValSecIVtxt:item.text });
                              }

                              private handleAIsystemimpactCapcosapplicablelawsSecIV(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
    
                                this.setState({ MyAIsystemimpactCapcosapplicablelawsIIValSecIV:item.key });
                                this.setState({ MyAIsystemimpactCapcosapplicablelawsIIValSecIVtxt:item.text });
                            }

                            
                    private handleAIcomponentrepresentsignificantinvestmentSecIV(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
    
                      this.setState({ MyAIcomponentrepresentsignificantinvestmentIIValSecIV:item.key });
                      this.setState({ MyAIcomponentrepresentsignificantinvestmentIIValSecIVtxt:item.text });
                  }

                  private handleAIsystemsuggestinherenthighrisksSecIV(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
    
                    this.setState({ MyAIsystemsuggestinherenthighrisksIIValSecIV:item.key });
                    this.setState({ MyAIsystemsuggestinherenthighrisksIIValSecIVtxt:item.text });
                }

                private handleAISystemdeployedSecIV(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
    
                  this.setState({ MyAISystemdeployedSecIV:item.key });
                  this.setState({ MyAISystemdeployedSecIVtxt:item.text });
              }

              private handleAISystemHighRiskSecIV(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
    
                this.setState({ MyAISharepointSecV:item.key });
                this.setState({ MyAISharepointSecVtxt:item.text });
            }

                //End

                //SEC V

                private handleAIsystemGenerativeSecV(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
    
                  this.setState({ MyAIsystemGenerativeSecV:item.key });
                  this.setState({ MyAIsystemGenerativetextSecV:item.text });
              }


              private changeAIprojectBussinesscaseSecIVtxtSecV(data: any): void {

                this.setState({ MyBusinessUseCaseSecV: data.target.value });
              
              }


              private changeAIprojectArchitectureSecIVtxtSecV(data: any): void {

                this.setState({ MyAIprojectArchitecureCaseSecV: data.target.value });
              
              }


              private changeAIprojectSharepointSecIVtxtSecV(data: any): void {

                this.setState({ MySharepointCaseSecV: data.target.value });
              
              }


              private OnUpdateSectionIIIBtnClick()
              {

                if(this.state.MyAIsystemGenerativeSecV== null  || this.state.MyAIsystemGenerativeSecV == '')

                  {
  
                    alert('Please Select  AI system Generative')
  
                  }
  
                  else if(this.state.MyBusinessUseCaseSecV== null  || this.state.MyBusinessUseCaseSecV== '')
  
                  {
                   alert('Please Select BusinessUseCase');
  
                  }

                  else if(this.state.MyAIprojectArchitecureCaseSecV== null  || this.state.MyAIprojectArchitecureCaseSecV== '')
                  {

                    alert('Please Select ProjectArchitecture');
                  }

                  else if(this.state.MySharepointCaseSecV== null  || this.state.MySharepointCaseSecV== '')
                  {

                    alert('Please Select Sharepoint Case');
                  }

                  else if(this.state.MyProjectClassifications!=this.state.MySavedProjectClassVal)
                  {

                    alert('Please Select different value');
                  }

                  else
                  {

                    this._service.UpdateSectionIII(
        
                      myitemId,
                      this.state.MyAIsystemGenerativetextSecV,
                      this.state.MyBusinessUseCaseSecV,
                      this.state.MyAIprojectArchitecureCaseSecV,
                      this.state.MySharepointCaseSecV,
                      this.state.MyProjectClassifications,
                     
              
                     ).then(function (data:any)
                          {
                      
                            console.log(data);
                
                            alert('Record Updated successfully');
                            
                          //window.location.replace("https://capcoinc.sharepoint.com/sites/EnterpriseRiskKeyContactsandOverview/SitePages/AI%20RISK%20Assessment%20Datatable.aspx");
                          });
      
                    
      


                  }
  


              }

        

                //END



  public render(): React.ReactElement<IAiRsikAssemnet10Props> {
    

    return (
      <Stack tokens={stackTokens} styles={stackStyles}>

      <Stack>


  {/* //Only for SEC1 Submit */}

  {this.state.SecIVisble==true &&  myitemId=="" &&

    <Stack>
      <label>one</label>

     <label className={styles.labelsFonts}>1. Project System Name <label className={styles.recolorss}>*</label> </label><br></br>
     <input type="text" name="txtProjName" value={this.state.ProjSystemName} onChange={this.changeProjectSystemName.bind(this)} className={styles.boxsize} /><br></br>

     <label className={styles.labelsFonts}>2. Project Classification <label className={styles.recolorss}>*</label> </label><br></br>
     <Dropdown className={styles.onlyFont}
                  placeholder="Select Project Classification"
                  options={this.state.ProjectClassListItems}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyProjectClassVal ? this.state.MyProjectClassVal : undefined} 
                  onChange={this.handleChangeProjClassValue.bind(this)}
                /><br></br>

<label className={styles.labelsFonts}>3. What is the purpose and key concept(s) of the project/system? <label className={styles.recolorss}>*</label> </label><br></br>
<textarea id="txtPurpose" value={this.state.Purpose} onChange={this.changePurpose.bind(this)} className={styles.textAreacss} ></textarea><br></br>

<label className={styles.labelsFonts}>4. Business Owner <label className={styles.recolorss}>*</label> </label><br/>
                <div className={styles.boxsize} id="divBussinessOwner">  
                  <PeoplePicker
                  context={this.props.context}
                  //titleText="User Name"
                  personSelectionLimit={2}
                  showtooltip={true}
                  required={true}
                  onChange={this._getPeoplePickerItemsBussinessOwner.bind(this)}
                  showHiddenInUI={false}
                  principalTypes={[PrincipalType.User]}
                  defaultSelectedUsers={(this.state.BussinessOwnerName && this.state.BussinessOwnerName.length) ? [this.state.BussinessOwnerName] : []}
                  ref={c => (this.ppl = c)} 
                  resolveDelay={1000} />
                 </div><br></br><br></br>
                 <label className={styles.labelsFonts}>5. Technical Owner <label className={styles.recolorss}>*</label> </label><br/>
                 <div className={styles.boxsize} id="divTechicalOwner">  
                  <PeoplePicker
                  context={this.props.context}
                  //titleText="User Name"
                  personSelectionLimit={2}
                  showtooltip={true}
                  required={true}
                  onChange={this._getPeoplePickerItemsTechnicalOwner.bind(this)}
                  showHiddenInUI={false}
                  principalTypes={[PrincipalType.User]}
                  defaultSelectedUsers={(this.state.TechnicalOwnerName && this.state.TechnicalOwnerName.length) ? [this.state.TechnicalOwnerName] : []}
                  ref={c => (this.ppl = c)} 
                  resolveDelay={1000}/>
                  </div> <br/> <br></br>  

                  <label className={styles.labelsFonts}>6. Geography <label className={styles.recolorss}>*</label> </label><br></br>
                  <Dropdown className={styles.onlyFont}
                  placeholder="Select Geography"
                  options={this.state.GeographyListItems}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyGeographyVal ? this.state.MyGeographyVal : undefined} onChange={this.handleChangeGeoraphyType.bind(this)} 
                  />
                <br/> 

<label className={styles.labelsFonts}>7. Capco Domain <label className={styles.recolorss}>*</label> </label><br></br>
                  <Dropdown className={styles.onlyFont}
                  placeholder="Select CapcoDomain"
                  options={this.state.CapcoDomailListItems}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyCapcoDomainVal ? this.state.MyCapcoDomainVal : undefined} 
                  onChange={this.handleChangeCapcoDomain.bind(this)}/>
                <br/> 

                <label className={styles.labelsFonts}>8. Client/Audience <label className={styles.recolorss}>*</label> </label><br></br>
                <input type="text" name="txtProjName" value={this.state.Client} onChange={this.changeClient.bind(this)} className={styles.boxsize} /><br></br>  
                
                <label className={styles.labelsFonts}>9. Sales App Opportunity ID <label className={styles.recolorss}>*</label> </label><br></br>
                <input type="text" name="txtProjName" value={this.state.SalesId} onChange={this.changeSales.bind(this)} className={styles.boxsize} /><br></br>  

                <label className={styles.labelsFonts}>10. Project Stage <label className={styles.recolorss}>*</label> </label><br></br>
                  <Dropdown className={styles.onlyFont}
                  placeholder="Select Project Stage"
                  options={this.state.ProjectStageListItems}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyProjectStage ? this.state.MyProjectStage : undefined} onChange={this.handleChangeProjectStage.bind(this)} 
                  />
                <br/> 

      <label className={styles.labelsFonts}>11. Scope of project/system <label className={styles.recolorss}>*</label> </label><br></br>
      <textarea id="txtScopeofProject" value={this.state.ScopeofProject} onChange={this.changeScopeofProject.bind(this)} className={styles.textAreacss} ></textarea><br></br>

     <label className={styles.labelsFonts}>12. Not in scope of project/system <label className={styles.recolorss}>*</label> </label><br></br>
     <textarea id="txtNonScopeofProject" value={this.state.NotScopeofProject} onChange={this.NotchangeScopeofProject.bind(this)} className={styles.textAreacss} ></textarea><br></br>

     <label className={styles.labelsFonts}>13. Evidence of research <label className={styles.recolorss}>*</label> </label><br></br>
     <textarea id="txtEvidenceofresearch" value={this.state.Evidenceofresearch} onChange={this.ChangeEvidenceofResearch.bind(this)} className={styles.textAreacss} ></textarea><br></br>


     <div id="divbutton" hidden={this.state.SecIIbuttonVisble || this.state.SecIIIbuttonVisble}>  
        <PrimaryButton text="Submit" onClick={this.OnSection1BtnClick.bind(this)} styles={stackButtonStyles}  
        className={styles.Mybutton} />
    </div><br></br><br></br>

    </Stack>

      }


{this.state.SecIDisableAfterSave==true && myitemId!="" && 

<Stack>
<label>Two</label>
<b><label className={styles.labelsFonts}>1. Project System Name </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.ProjSystemName}</label><br></br>
<b><label>Project Classification</label></b><br></br>
<label className={styles.labelsFonts}>{this.state.MyProjectClassValText}</label><br/>
<b><label className={styles.labelsFonts}>2. Proceed to: <label className={styles.recolorss}>*</label></label></b><br></br>
<Dropdown className={styles.onlyFont}
                  placeholder="Select Project Classification"
                  options={this.state.ProjectClassListItemsSecII}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyProjectClassVal ? this.state.MyProjectClassVal : undefined} 
                  onChange={this.handleChangeProjClassValueSecII.bind(this)}
                /><br></br>
<b><label className={styles.labelsFonts}>3. What is the purpose and key concept(s) of the project/system? </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.Purpose}</label><br></br>
<b><label className={styles.labelsFonts}>4. Bussiness Owner</label></b><br/>
<label className={styles.labelsFonts}>{this.state.BussinessOwnerName == null ? 'N/A' : this.state.BussinessOwnerName}</label><br/><br/>
<b><label className={styles.labelsFonts}>5. Technical Owner</label></b><br/>
<label className={styles.labelsFonts}>{this.state.TechnicalOwnerName == null ? 'N/A' : this.state.TechnicalOwnerName}</label><br/><br/>
<b><label className={styles.labelsFonts}>6. Geography</label></b><br></br>
<label className={styles.labelsFonts}>{this.state.MyGeographyVal}</label><br/>
<b><label className={styles.labelsFonts}>7. Capco Domain </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.MyCapcoDomainVal}</label><br/>
<b><label className={styles.labelsFonts}>8.Client/Audience </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.Client}</label><br/>
<b><label className={styles.labelsFonts}>9. Sales App Opportunity ID </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.SalesId}</label><br/>
<b><label className={styles.labelsFonts}>10. Project Stage </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.MyProjectStage}</label><br/>

<b><label className={styles.labelsFonts}>11. Scope of project/system  </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.ScopeofProject}</label><br/>

<b><label className={styles.labelsFonts}>12. Not in scope of project/system </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.NotScopeofProject}</label><br/>

<b><label className={styles.labelsFonts}>13. Evidence of research </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.Evidenceofresearch}</label><br/>


</Stack>

}

      {/* //Only SECII Submit */}

    {this.state.SecIIVisble == true && myitemId=="" &&

    <Stack>
      <label>Four</label>

{/* //Sec 2 */}
       <b><label className={styles.test}>Data and Business Use Case Risk Level of AI Project/System</label></b><br></br>
        <b><label className={styles.test}>Personal & Company Data </label></b><br></br>

        <label className={styles.labelsFonts}>1. Will the AI system capture, store or process personal data? <label className={styles.recolorss}>*</label> </label><br></br>
        <Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state.AIsystemcaptureSectionIIListItems}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAISytemCaptureSectionIIVal ? this.state.MyAISytemCaptureSectionIIVal : undefined} onChange={this.handleAIsystemcaptureSectionII.bind(this)} 
                  />
                <br/> 
        <label className={styles.labelsFonts}>Display Link(Under Process) </label><br></br>

        <label className={styles.labelsFonts}>2. Will the AI system be augmented with Capco or client data? <label className={styles.recolorss}>*</label> </label><br></br>
        <Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state.AISystemArgumenStectionIIListItems}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAISystemArgumenStectionIIVal ? this.state.MyAISystemArgumenStectionIIVal : undefined} onChange={this.handleAISystemArgumenStectionII.bind(this)} 
                  />
                <br/> 

               

        <label className={styles.labelsFonts} hidden={this.state.MyDescribewhatandhow}>Please describe what and how </label><br></br>
        <input type="text" name="txtArumentSecII" hidden={this.state.MyDescribewhatandhow} value={this.state.ArumentSecIItxt} onChange={this.changeArumentSecIItxt.bind(this)} className={styles.boxsize} /><br></br> <br></br> 
     

        <b><label className={styles.test}>Prohibited AI </label></b><br></br><br></br>

        <label className={styles.labelsFonts}>3. Does the AI system rely on the untargeted collection of facial images from the internet or CCTV footage to build facial recognition databases? <label className={styles.recolorss}>*</label> </label><br></br>

        <Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state.AIsystemCCTVfootageSectionIIListItems}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemCCTVfootageSectionIIVal ? this.state.MyAIsystemCCTVfootageSectionIIVal : undefined} onChange={this.handleAISystemCCTVfootageStectionII.bind(this)} 
                  /><br></br>
        

        <label className={styles.labelsFonts}>4. Does the AI system rely on subliminal, purposefully manipulative, or deceptive techniques to influence individuals' behavior? <label className={styles.recolorss}>*</label> </label><br></br>
        <Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state.AIsystemrelySectionIIListItems}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemrelySectionIIVal ? this.state.MyAIsystemrelySectionIIVal : undefined} onChange={this.handleAIsystemrelySectionII.bind(this)} 
                  /><br></br>

      <label className={styles.labelsFonts}>5. Does the AI system analyze or infer emotions of individuals within the workplace or educational institutions? <label className={styles.recolorss}>*</label> </label><br></br>
      <Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state.AISysteminferemotionsSectionIIListItems}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAISysteminferemotionsSectionIIVal ? this.state.MyAISysteminferemotionsSectionIIVal : undefined} onChange={this.handleAISysteminferemotionsSectionII.bind(this)} 
                  /><br></br>

      <label className={styles.labelsFonts}>6. Does the AI system use biometric data to deduce or infer race, political opinions, trade union membership, religious or philosophical beliefs, sex life, or sexual orientation?<label className={styles.recolorss}>*</label> </label><br></br>
      <Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state.AISystembiometricSectionIIListItems}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAISystembiometricSectionIIVal ? this.state.MyAISystembiometricSectionIIVal : undefined} onChange={this.handleAISystembiometricSectionII.bind(this)} 
                  /><br></br>
        
        <label className={styles.labelsFonts}>7. Does the AI system make risk assessments of individuals to identify or predict the risk that they will commit a criminal offense? <label className={styles.recolorss}>*</label> </label><br></br>
       
        <Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state.AIsystemriskassessmentsSectionIIListItems}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemriskassessmentsSectionIIVal ? this.state.MyAIsystemriskassessmentsSectionIIVal : undefined} onChange={this.handleAIsystemriskassessmentsSectionII.bind(this)} 
                  /><br></br>

        <label className={styles.labelsFonts}>8. Is the AI system involved in social scoring of individuals, potentially leading to detrimental or unfavorable treatment based on their behavior, characteristics, or personal circumstances?<label className={styles.recolorss}>*</label> </label><br></br>
        <Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state. AISystemSocialScoringsSectionIIListItems}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAISystemSocialScoringsSectionIIVal ? this.state.MyAISystemSocialScoringsSectionIIVal : undefined} onChange={this.handleAISystemSocialScoringsSectionII.bind(this)} 
                  /><br></br>


        <label className={styles.labelsFonts}>9. Does the AI system engage in mass surveillance of individuals in public or private spaces without their explicit consent?<label className={styles.recolorss}>*</label> </label><br></br>
        <Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state. AISystemEngageSectionIIListItems}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAISystemEngageSectionIIVal ? this.state.MyAISystemEngageSectionIIVal : undefined} onChange={this.handleAISystemEngageSectionII.bind(this)} 
                  /><br></br>
        
        <label className={styles.labelsFonts}>10. Does the AI system make significant legal or similar decisions (e.g., in employment, healthcare, education) without human review or possibility for appeal?<label className={styles.recolorss}>*</label> </label><br></br>
        <Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state.AIsystemleagalSectionIIListItems}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemleagalSectionIIVal ? this.state.MyAIsystemleagalSectionIIVal : undefined} onChange={this.handleAIsystemlegalSectionII.bind(this)} 
                  /><br></br>

<label className={styles.labelsFonts}>11.Is the AI system designed to influence or manipulate political campaigns, voting behavior, or other democratic processes?<label className={styles.recolorss}>*</label> </label><br></br>
<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state.AIsysteminfluenceSectionIIListItems}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsysteminfluenceSectionIIVal ? this.state.MyAIsysteminfluenceSectionIIVal : undefined} onChange={this.handleAIsysteminfluenceSectionII.bind(this)} 
                  /><br></br>
  <label className={styles.labelsFonts}>12. Does the AI system make criminal risk assessments or predictions about individuals based on profiling or other biometric data?<label className={styles.recolorss}>*</label> </label><br></br>
  <Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state.AIsystemcriminalSectionIIListItems}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemcriminalSectionIIVal ? this.state.MyAIsystemcriminalSectionIIVal : undefined} onChange={this.handleAIsystemcriminalSectionII.bind(this)} 
                  /><br></br>

<label className={styles.labelsFonts}>13. Does the AI system use real-time biometric identification in publicly accessible spaces for law enforcement purposes?<label className={styles.recolorss}>*</label> </label><br></br>
<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state.AIsystembiometricSectionIIListItems}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystembiometricSectionIIVal ? this.state.MyAIsystembiometricSectionIIVal : undefined} onChange={this.handleAIsystembiometricSectionII.bind(this)} 
                  /><br></br>


<label className={styles.labelsFonts}>14. Does the AI system exploit vulnerabilities of individuals based on factors such as age, disability, or socio-economic status to influence their behavior?<label className={styles.recolorss}>*</label> </label><br></br>
<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state.AIsystemexploitSectionIIListItems}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemexploitSectionIIVal ? this.state.MyAIsystemexploitSectionIIVal : undefined} onChange={this.handleAIsystemexploitSectionII.bind(this)} 
                  /><br></br><br></br>


<b><label className={styles.test}>High Risk AI </label></b><br></br><br></br>

<label className={styles.labelsFonts}>1. Will the AI system be used to assess whether an individual is eligible to receive medical treatment or influence health outcomes?<label className={styles.recolorss}>*</label> </label><br></br>
<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state. AIsystemindividualiseligibleIIListItemsSecIV}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemindividualiseligibleIIValSecIV ? this.state.MyAIsystemindividualiseligibleIIValSecIV : undefined} onChange={this.handleAIsystemindividualiseligibleSecIV.bind(this)} 
                  /><br></br>

<label className={styles.labelsFonts}>2. Will the AI system be used to determine access to education, evaluate progress, or detect cheating in academic or training settings?<label className={styles.recolorss}>*</label> </label><br></br>
<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state.AIsystemeducationevaluateprogressIIListItemsSecIV}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemeducationevaluateprogressIIValSecIV ? this.state.MyAIsystemeducationevaluateprogressIIValSecIV : undefined} onChange={this.handleAIsystemeducationevaluateprogressSecIV.bind(this)} 
                  /><br></br>

<label className={styles.labelsFonts}>3. Will the AI system be used to assess eligibility for employment,promotions,loans,or housing?<label className={styles.recolorss}>*</label> </label><br></br>

<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state. AIsystemassesseligibilityemploymentIIListItemsSecIV}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemassesseligibilityemploymentIIValSecIV ? this.state.MyAIsystemassesseligibilityemploymentIIValSecIV : undefined} onChange={this.handleAIsystemassesseligibilityemploymentSecIV.bind(this)} 
                  /><br></br>

<label className={styles.labelsFonts}>4. Will the AI system be used to profile individuals or assess their risk of committing a crime?<label className={styles.recolorss}>*</label> </label><br></br>

<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state. AIsystemprofileindividualsIIListItemsSecIV}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemprofileindividualsIIValSecIV ? this.state.MyAIsystemprofileindividualsIIValSecIV : undefined} onChange={this.handleAIsystemprofileindividualsSecIV.bind(this)} 
                  /><br></br>

<label className={styles.labelsFonts}>5.Will the AI system be used to operate or control robots, drones, medical devices, or other machinery?<label className={styles.recolorss}>*</label> </label><br></br>

<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state. AIsystemoperatecontrolrobotsIIListItemsSecIV}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemoperatecontrolrobotsIIValSecIV ? this.state.MyAIsystemoperatecontrolrobotsIIValSecIV : undefined} onChange={this.handleAIsystemoperatecontrolrobotsSecIV.bind(this)} 
                  /><br></br>

<label className={styles.labelsFonts}>6. Will the AI system be trained using third-party restricted or non-public personal data without proper consent?<label className={styles.recolorss}>*</label> </label><br></br>
<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state. AIsystemtrainedthirdpartyrestrictedIIListItemsSecIV}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemtrainedthirdpartyrestrictedIIValSecIV ? this.state.MyAIsystemtrainedthirdpartyrestrictedIIValSecIV : undefined} onChange={this.handleAIsystemtrainedthirdpartyrestrictedSecIV.bind(this)} 
                  /><br></br>

<label className={styles.labelsFonts}>7. Will the AI system make decisions or control actions that significantly impact individuals or groups, potentially causing fear or concern?<label className={styles.recolorss}>*</label> </label><br></br>
<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state. AIsystemdecisionscontrolactionssignificantlyIIListItemsSecIV}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemdecisionscontrolactionssignificantlyIIValSecIV ? this.state.MyAIsystemdecisionscontrolactionssignificantlyIIValSecIV : undefined} onChange={this.handleAIsystemdecisionscontrolactionssignificantlySecIV.bind(this)} 
                  /><br></br>

<label className={styles.labelsFonts}>8. Will the AI system interact with a large number of individuals concerning highly sensitive or confidential matters?<label className={styles.recolorss}>*</label> </label><br></br>
<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state.AIsystemdividualsconcerninghighlysensitiveIIListItemsSecIV}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemdividualsconcerninghighlysensitiveIIValSecIV ? this.state.MyAIsystemdividualsconcerninghighlysensitiveIIValSecIV: undefined} onChange={this.handleAIsystemdividualsconcerninghighlysensitiveSecIV.bind(this)} 
                  /><br></br>

<label className={styles.labelsFonts}>9. Will the AI system play a critical role in operating essential infrastructure (e.g., energy, transportation, healthcare)?<label className={styles.recolorss}>*</label> </label><br></br>
<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state. AIsystemcriticaloperatingessentialinfrastructureIIListItemsSecIV}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemcriticaloperatingessentialinfrastructureIIValSecIV ? this.state.MyAIsystemcriticaloperatingessentialinfrastructureIIValSecIV : undefined} onChange={this.handleAIsystemcriticaloperatingessentialinfrastructureSecIV.bind(this)} 
                  /><br></br>

<label className={styles.labelsFonts}>10. Does the use of the AI system pose an increased risk of significant negative media coverage or reputational damage for Capco or its clients?<label className={styles.recolorss}>*</label> </label><br></br>

<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state. AIsystemincreasedsignificantnegativeIIListItemsSecIV}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemincreasedsignificantnegativeIIValSecIV ? this.state.MyAIsystemincreasedsignificantnegativeIIValSecIV : undefined} onChange={this.handleAIsystemincreasedsignificantnegativeSecIV.bind(this)} 
                  /><br></br>

<label className={styles.labelsFonts}>11. Could a failure of the AI system lead to significant financial losses, legal liabilities, or damage to others?<label className={styles.recolorss}>*</label> </label><br></br>

<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state. AIsystemleadsignificantfinanciallossesIIListItemsSecIV}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemleadsignificantfinanciallossesIIValSecIV ? this.state.MyAIsystemleadsignificantfinanciallossesIIValSecIV : undefined} onChange={this.handleAIsystemleadsignificantfinanciallossesSecIV.bind(this)} 
                  /><br></br>

<label className={styles.labelsFonts}>12. Could a failure of the AI system impact Capco's ability to comply with applicable laws or regulations in a serious way?<label className={styles.recolorss}>*</label> </label><br></br>
<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state. AIsystemimpactCapcosapplicablelawsIIListItemsSecIV}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemimpactCapcosapplicablelawsIIValSecIV ? this.state.MyAIsystemimpactCapcosapplicablelawsIIValSecIV : undefined} onChange={this.handleAIsystemimpactCapcosapplicablelawsSecIV.bind(this)} 
                  /><br></br>

<label className={styles.labelsFonts}>13. Does the AI component represent a significant investment or hold strategic importance for Capco?<label className={styles.recolorss}>*</label> </label><br></br>

<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state. AIcomponentrepresentsignificantinvestmentIIListItemsSecIV}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIcomponentrepresentsignificantinvestmentIIValSecIV ? this.state.MyAIcomponentrepresentsignificantinvestmentIIValSecIV : undefined} onChange={this.handleAIcomponentrepresentsignificantinvestmentSecIV.bind(this)} 
                  /><br></br>

<label className={styles.labelsFonts}>14. Do the characteristics of the AI system suggest that there are inherent high risks that must be considered?<label className={styles.recolorss}>*</label> </label><br></br>
<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state. AIsystemsuggestinherenthighrisksIIListItemsSecIV}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemsuggestinherenthighrisksIIValSecIV ? this.state.MyAIsystemsuggestinherenthighrisksIIValSecIV : undefined} onChange={this.handleAIsystemsuggestinherenthighrisksSecIV.bind(this)} 
                  /><br></br>

<label className={styles.labelsFonts}>15. Will the AI system be deployed in any of the following regulated sectors:<label className={styles.recolorss}>*</label> </label><br></br>

<ul>
  <li>Agricultural and forestry vehicles</li>
  <li>Civil Aviation</li>
  <li>Marine</li>
  <li>Motor Vehicles</li>
  <li>Cableways</li>
  <li>Explosives</li>
  <li>Gas-fueled appliances</li>
  <li>Lifts,elevators</li>
  <li>Machinery</li>
  <li>Pressure equipment</li>
  <li>Watercraft</li>
  <li>Medical devices</li>
  <li>Personal protective equipment</li>
  <li>Radio</li>
  <li>Toys</li>
  </ul> 
  <br></br>
<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state.AISystemdeployedListItemsSecIV}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAISystemdeployedSecIV ? this.state.MyAISystemdeployedSecIV : undefined} 
                  onChange={this.handleAISystemdeployedSecIV.bind(this)}/>
                <br/> 

<label className={styles.labelsFonts}>16.Regardless of any other responses above, does the AI system pose any significant risk of harm to individuals' health, safety, or fundamental rights.<label className={styles.recolorss}>*</label> </label><br></br>
<label className={styles.labelsFonts}>Some examples of systems that may be considered low/medium risk:</label><br></br>

<ul>
  <li>AI system performs narrow procedural tasks</li>
  <li>AI system performs quality control of previously completed human activity</li>
  <li>AI system is intended to detect decision-making patterns or deviations from established patterns and is not meant to replace or influence a previously completed human assessment</li>
  <li>AI system is intended to perform a preparatory task for an assessment that is considered High Risk AI</li>
</ul>   
<br></br>

<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state.AISystemHighRiskListItemsSecIV}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAISharepointSecV ? this.state.MyAISharepointSecV : undefined} 
                  onChange={this.handleAISystemHighRiskSecIV.bind(this)}/>
                <br/> <br></br>



<div id="divbutton" hidden={this.state.SecIbuttonVisble || this.state.SecIIIbuttonVisble}>  
<PrimaryButton text="Submit" onClick={this.OnSectionIIBtnClick.bind(this)} styles={stackButtonStyles}  
className={styles.Mybutton} />
</div><br></br><br></br>

    </Stack>

    }

{this.state.SecIDisableAfterSave==true && myitemId!="" && this.state.SecIIVisble == true &&

<Stack>

<label>Three</label>


<label>Updating the Details</label>

<b><label className={styles.test}>Data and Business Use Case Risk Level of AI Project/System</label></b><br></br>
        <b><label className={styles.test}>Personal & Company Data </label></b><br></br>

        <label className={styles.labelsFonts}>1. Will the AI system capture, store or process personal data? <label className={styles.recolorss}>*</label> </label><br></br>
        <Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state.AIsystemcaptureSectionIIListItems}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAISytemCaptureSectionIIVal ? this.state.MyAISytemCaptureSectionIIVal : undefined} onChange={this.handleAIsystemcaptureSectionII.bind(this)} 
                  />
                <br/> 
        <label className={styles.labelsFonts}>Display Link(Under Process) </label><br></br>

        <label className={styles.labelsFonts}>2. Will the AI system be augmented with Capco or client data? <label className={styles.recolorss}>*</label> </label><br></br>
        <Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state.AISystemArgumenStectionIIListItems}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAISystemArgumenStectionIIVal ? this.state.MyAISystemArgumenStectionIIVal : undefined} onChange={this.handleAISystemArgumenStectionII.bind(this)} 
                  />
                <br/> 

               

        <label className={styles.labelsFonts} hidden={this.state.MyDescribewhatandhow}>Please describe what and how </label><br></br>
        <input type="text" name="txtArumentSecII" hidden={this.state.MyDescribewhatandhow} value={this.state.ArumentSecIItxt} onChange={this.changeArumentSecIItxt.bind(this)} className={styles.boxsize} /><br></br> <br></br> 
     

        <b><label className={styles.test}>Prohibited AI1 </label></b><br></br><br></br>

        <label className={styles.labelsFonts}>3. Does the AI system rely on the untargeted collection of facial images from the internet or CCTV footage to build facial recognition databases? <label className={styles.recolorss}>*</label> </label><br></br>

        <Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state.AIsystemCCTVfootageSectionIIListItems}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemCCTVfootageSectionIIVal ? this.state.MyAIsystemCCTVfootageSectionIIVal : undefined} onChange={this.handleAISystemCCTVfootageStectionII.bind(this)} 
                  /><br></br>
        

        <label className={styles.labelsFonts}>4. Does the AI system rely on subliminal, purposefully manipulative, or deceptive techniques to influence individuals' behavior? <label className={styles.recolorss}>*</label> </label><br></br>
        <Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state.AIsystemrelySectionIIListItems}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemrelySectionIIVal ? this.state.MyAIsystemrelySectionIIVal : undefined} onChange={this.handleAIsystemrelySectionII.bind(this)} 
                  /><br></br>

      <label className={styles.labelsFonts}>5. Does the AI system analyze or infer emotions of individuals within the workplace or educational institutions? <label className={styles.recolorss}>*</label> </label><br></br>
      <Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state.AISysteminferemotionsSectionIIListItems}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAISysteminferemotionsSectionIIVal ? this.state.MyAISysteminferemotionsSectionIIVal : undefined} onChange={this.handleAISysteminferemotionsSectionII.bind(this)} 
                  /><br></br>

      <label className={styles.labelsFonts}>6. Does the AI system use biometric data to deduce or infer race, political opinions, trade union membership, religious or philosophical beliefs, sex life, or sexual orientation?<label className={styles.recolorss}>*</label> </label><br></br>
      <Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state.AISystembiometricSectionIIListItems}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAISystembiometricSectionIIVal ? this.state.MyAISystembiometricSectionIIVal : undefined} onChange={this.handleAISystembiometricSectionII.bind(this)} 
                  /><br></br>
        
        <label className={styles.labelsFonts}>7. Does the AI system make risk assessments of individuals to identify or predict the risk that they will commit a criminal offense? <label className={styles.recolorss}>*</label> </label><br></br>
       
        <Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state.AIsystemriskassessmentsSectionIIListItems}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemriskassessmentsSectionIIVal ? this.state.MyAIsystemriskassessmentsSectionIIVal : undefined} onChange={this.handleAIsystemriskassessmentsSectionII.bind(this)} 
                  /><br></br>

        <label className={styles.labelsFonts}>8. Is the AI system involved in social scoring of individuals, potentially leading to detrimental or unfavorable treatment based on their behavior, characteristics, or personal circumstances?<label className={styles.recolorss}>*</label> </label><br></br>
        <Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state. AISystemSocialScoringsSectionIIListItems}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAISystemSocialScoringsSectionIIVal ? this.state.MyAISystemSocialScoringsSectionIIVal : undefined} onChange={this.handleAISystemSocialScoringsSectionII.bind(this)} 
                  /><br></br>


        <label className={styles.labelsFonts}>9. Does the AI system engage in mass surveillance of individuals in public or private spaces without their explicit consent?<label className={styles.recolorss}>*</label> </label><br></br>
        <Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state. AISystemEngageSectionIIListItems}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAISystemEngageSectionIIVal ? this.state.MyAISystemEngageSectionIIVal : undefined} onChange={this.handleAISystemEngageSectionII.bind(this)} 
                  /><br></br>
        
        <label className={styles.labelsFonts}>10. Does the AI system make significant legal or similar decisions (e.g., in employment, healthcare, education) without human review or possibility for appeal?<label className={styles.recolorss}>*</label> </label><br></br>
        <Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state.AIsystemleagalSectionIIListItems}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemleagalSectionIIVal ? this.state.MyAIsystemleagalSectionIIVal : undefined} onChange={this.handleAIsystemlegalSectionII.bind(this)} 
                  /><br></br>

<label className={styles.labelsFonts}>11.Is the AI system designed to influence or manipulate political campaigns, voting behavior, or other democratic processes?<label className={styles.recolorss}>*</label> </label><br></br>
<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state.AIsysteminfluenceSectionIIListItems}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsysteminfluenceSectionIIVal ? this.state.MyAIsysteminfluenceSectionIIVal : undefined} onChange={this.handleAIsysteminfluenceSectionII.bind(this)} 
                  /><br></br>
  <label className={styles.labelsFonts}>12. Does the AI system make criminal risk assessments or predictions about individuals based on profiling or other biometric data?<label className={styles.recolorss}>*</label> </label><br></br>
  <Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state.AIsystemcriminalSectionIIListItems}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemcriminalSectionIIVal ? this.state.MyAIsystemcriminalSectionIIVal : undefined} onChange={this.handleAIsystemcriminalSectionII.bind(this)} 
                  /><br></br>

<label className={styles.labelsFonts}>13. Does the AI system use real-time biometric identification in publicly accessible spaces for law enforcement purposes?<label className={styles.recolorss}>*</label> </label><br></br>
<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state.AIsystembiometricSectionIIListItems}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystembiometricSectionIIVal ? this.state.MyAIsystembiometricSectionIIVal : undefined} onChange={this.handleAIsystembiometricSectionII.bind(this)} 
                  /><br></br>


<label className={styles.labelsFonts}>14. Does the AI system exploit vulnerabilities of individuals based on factors such as age, disability, or socio-economic status to influence their behavior?<label className={styles.recolorss}>*</label> </label><br></br>
<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state.AIsystemexploitSectionIIListItems}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemexploitSectionIIVal ? this.state.MyAIsystemexploitSectionIIVal : undefined} onChange={this.handleAIsystemexploitSectionII.bind(this)} 
                  /><br></br><br></br>


<b><label className={styles.test}>High Risk AI1 </label></b><br></br><br></br>

<label className={styles.labelsFonts}>1. Will the AI system be used to assess whether an individual is eligible to receive medical treatment or influence health outcomes?<label className={styles.recolorss}>*</label> </label><br></br>
<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state. AIsystemindividualiseligibleIIListItemsSecIV}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemindividualiseligibleIIValSecIV ? this.state.MyAIsystemindividualiseligibleIIValSecIV : undefined} onChange={this.handleAIsystemindividualiseligibleSecIV.bind(this)} 
                  /><br></br>

<label className={styles.labelsFonts}>2. Will the AI system be used to determine access to education, evaluate progress, or detect cheating in academic or training settings?<label className={styles.recolorss}>*</label> </label><br></br>
<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state.AIsystemeducationevaluateprogressIIListItemsSecIV}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemeducationevaluateprogressIIValSecIV ? this.state.MyAIsystemeducationevaluateprogressIIValSecIV : undefined} onChange={this.handleAIsystemeducationevaluateprogressSecIV.bind(this)} 
                  /><br></br>

<label className={styles.labelsFonts}>3. Will the AI system be used to assess eligibility for employment,promotions,loans,or housing?<label className={styles.recolorss}>*</label> </label><br></br>

<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state. AIsystemassesseligibilityemploymentIIListItemsSecIV}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemassesseligibilityemploymentIIValSecIV ? this.state.MyAIsystemassesseligibilityemploymentIIValSecIV : undefined} onChange={this.handleAIsystemassesseligibilityemploymentSecIV.bind(this)} 
                  /><br></br>

<label className={styles.labelsFonts}>4. Will the AI system be used to profile individuals or assess their risk of committing a crime?<label className={styles.recolorss}>*</label> </label><br></br>

<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state. AIsystemprofileindividualsIIListItemsSecIV}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemprofileindividualsIIValSecIV ? this.state.MyAIsystemprofileindividualsIIValSecIV : undefined} onChange={this.handleAIsystemprofileindividualsSecIV.bind(this)} 
                  /><br></br>

<label className={styles.labelsFonts}>5.Will the AI system be used to operate or control robots, drones, medical devices, or other machinery?<label className={styles.recolorss}>*</label> </label><br></br>

<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state. AIsystemoperatecontrolrobotsIIListItemsSecIV}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemoperatecontrolrobotsIIValSecIV ? this.state.MyAIsystemoperatecontrolrobotsIIValSecIV : undefined} onChange={this.handleAIsystemoperatecontrolrobotsSecIV.bind(this)} 
                  /><br></br>

<label className={styles.labelsFonts}>6. Will the AI system be trained using third-party restricted or non-public personal data without proper consent?<label className={styles.recolorss}>*</label> </label><br></br>
<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state. AIsystemtrainedthirdpartyrestrictedIIListItemsSecIV}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemtrainedthirdpartyrestrictedIIValSecIV ? this.state.MyAIsystemtrainedthirdpartyrestrictedIIValSecIV : undefined} onChange={this.handleAIsystemtrainedthirdpartyrestrictedSecIV.bind(this)} 
                  /><br></br>

<label className={styles.labelsFonts}>7. Will the AI system make decisions or control actions that significantly impact individuals or groups, potentially causing fear or concern?<label className={styles.recolorss}>*</label> </label><br></br>
<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state. AIsystemdecisionscontrolactionssignificantlyIIListItemsSecIV}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemdecisionscontrolactionssignificantlyIIValSecIV ? this.state.MyAIsystemdecisionscontrolactionssignificantlyIIValSecIV : undefined} onChange={this.handleAIsystemdecisionscontrolactionssignificantlySecIV.bind(this)} 
                  /><br></br>

<label className={styles.labelsFonts}>8. Will the AI system interact with a large number of individuals concerning highly sensitive or confidential matters?<label className={styles.recolorss}>*</label> </label><br></br>
<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state.AIsystemdividualsconcerninghighlysensitiveIIListItemsSecIV}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemdividualsconcerninghighlysensitiveIIValSecIV ? this.state.MyAIsystemdividualsconcerninghighlysensitiveIIValSecIV: undefined} onChange={this.handleAIsystemdividualsconcerninghighlysensitiveSecIV.bind(this)} 
                  /><br></br>

<label className={styles.labelsFonts}>9. Will the AI system play a critical role in operating essential infrastructure (e.g., energy, transportation, healthcare)?<label className={styles.recolorss}>*</label> </label><br></br>
<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state. AIsystemcriticaloperatingessentialinfrastructureIIListItemsSecIV}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemcriticaloperatingessentialinfrastructureIIValSecIV ? this.state.MyAIsystemcriticaloperatingessentialinfrastructureIIValSecIV : undefined} onChange={this.handleAIsystemcriticaloperatingessentialinfrastructureSecIV.bind(this)} 
                  /><br></br>

<label className={styles.labelsFonts}>10. Does the use of the AI system pose an increased risk of significant negative media coverage or reputational damage for Capco or its clients?<label className={styles.recolorss}>*</label> </label><br></br>

<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state. AIsystemincreasedsignificantnegativeIIListItemsSecIV}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemincreasedsignificantnegativeIIValSecIV ? this.state.MyAIsystemincreasedsignificantnegativeIIValSecIV : undefined} onChange={this.handleAIsystemincreasedsignificantnegativeSecIV.bind(this)} 
                  /><br></br>

<label className={styles.labelsFonts}>11. Could a failure of the AI system lead to significant financial losses, legal liabilities, or damage to others?<label className={styles.recolorss}>*</label> </label><br></br>

<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state. AIsystemleadsignificantfinanciallossesIIListItemsSecIV}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemleadsignificantfinanciallossesIIValSecIV ? this.state.MyAIsystemleadsignificantfinanciallossesIIValSecIV : undefined} onChange={this.handleAIsystemleadsignificantfinanciallossesSecIV.bind(this)} 
                  /><br></br>

<label className={styles.labelsFonts}>12. Could a failure of the AI system impact Capco's ability to comply with applicable laws or regulations in a serious way?<label className={styles.recolorss}>*</label> </label><br></br>
<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state. AIsystemimpactCapcosapplicablelawsIIListItemsSecIV}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemimpactCapcosapplicablelawsIIValSecIV ? this.state.MyAIsystemimpactCapcosapplicablelawsIIValSecIV : undefined} onChange={this.handleAIsystemimpactCapcosapplicablelawsSecIV.bind(this)} 
                  /><br></br>

<label className={styles.labelsFonts}>13. Does the AI component represent a significant investment or hold strategic importance for Capco?<label className={styles.recolorss}>*</label> </label><br></br>

<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state. AIcomponentrepresentsignificantinvestmentIIListItemsSecIV}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIcomponentrepresentsignificantinvestmentIIValSecIV ? this.state.MyAIcomponentrepresentsignificantinvestmentIIValSecIV : undefined} onChange={this.handleAIcomponentrepresentsignificantinvestmentSecIV.bind(this)} 
                  /><br></br>

<label className={styles.labelsFonts}>14. Do the characteristics of the AI system suggest that there are inherent high risks that must be considered?<label className={styles.recolorss}>*</label> </label><br></br>
<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state. AIsystemsuggestinherenthighrisksIIListItemsSecIV}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemsuggestinherenthighrisksIIValSecIV ? this.state.MyAIsystemsuggestinherenthighrisksIIValSecIV : undefined} onChange={this.handleAIsystemsuggestinherenthighrisksSecIV.bind(this)} 
                  /><br></br>

<label className={styles.labelsFonts}>15. Will the AI system be deployed in any of the following regulated sectors:<label className={styles.recolorss}>*</label> </label><br></br>

<ul>
  <li>Agricultural and forestry vehicles</li>
  <li>Civil Aviation</li>
  <li>Marine</li>
  <li>Motor Vehicles</li>
  <li>Cableways</li>
  <li>Explosives</li>
  <li>Gas-fueled appliances</li>
  <li>Lifts,elevators</li>
  <li>Machinery</li>
  <li>Pressure equipment</li>
  <li>Watercraft</li>
  <li>Medical devices</li>
  <li>Personal protective equipment</li>
  <li>Radio</li>
  <li>Toys</li>
  </ul> 
  <br></br>
<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state.AISystemdeployedListItemsSecIV}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAISystemdeployedSecIV ? this.state.MyAISystemdeployedSecIV : undefined} 
                  onChange={this.handleAISystemdeployedSecIV.bind(this)}/>
                <br/> 

<label className={styles.labelsFonts}>16. Regardless of any other responses above, does the AI system pose any significant risk of harm to individuals' health, safety, or fundamental rights.<label className={styles.recolorss}>*</label> </label><br></br>
<label className={styles.labelsFonts}>Some examples of systems that may be considered low/medium risk:</label><br></br>

<ul>
  <li>AI system performs narrow procedural tasks</li>
  <li>AI system performs quality control of previously completed human activity</li>
  <li>AI system is intended to detect decision-making patterns or deviations from established patterns and is not meant to replace or influence a previously completed human assessment</li>
  <li>AI system is intended to perform a preparatory task for an assessment that is considered High Risk AI</li>
</ul>   
<br></br>

<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state.AISystemHighRiskListItemsSecIV}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAISharepointSecV ? this.state.MyAISharepointSecV : undefined} 
                  onChange={this.handleAISystemHighRiskSecIV.bind(this)}/>
                <br/> <br></br>



<div id="divbutton" hidden={this.state.SecIbuttonVisble || this.state.SecIIIbuttonVisble}>  
<PrimaryButton text="Update SectionII" onClick={this.OnBtnUpdateSectionIIClick.bind(this)} styles={stackButtonStyles}  
className={styles.Mybutton} />
</div><br></br><br></br>


  


</Stack>
}


{/* //only secIIIvisible */}

{this.state.SecIIIVisble == true &&  myitemId=="" &&

<Stack>

<label>Five1</label>
<b><label className={styles.test}>Business Requirements, Architecture, and Design </label></b><br></br><br></br>

<label className={styles.labelsFonts}>1. Does the AI system use Generative AI or LLMs? <label className={styles.recolorss}>*</label> </label><br></br>
<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state. AIsystemGenerativeListItemsSecV}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemGenerativeSecV ? this.state.MyAIsystemGenerativeSecV : undefined} onChange={this.handleAIsystemGenerativeSecV.bind(this)} 
                  /><br></br>

<label className={styles.labelsFonts}>2. Provide links to AI project/system Business Use Case and Requirements Specification documentation? <label className={styles.recolorss}>*</label> </label><br></br>
<textarea id="txtAIProjectBussinessSecIII" value={this.state.MyBusinessUseCaseSecV} onChange={this.changeAIprojectBussinesscaseSecIVtxtSecV.bind(this)} className={styles.textAreacss} ></textarea><br></br>

<label className={styles.labelsFonts}>3. Provide links to AI project/system Architecture and Design Specification documentation? <label className={styles.recolorss}>*</label> </label><br></br>
<textarea id="txtEvidenceofresearch" value={this.state.MyAIprojectArchitecureCaseSecV} onChange={this.changeAIprojectArchitectureSecIVtxtSecV.bind(this)} className={styles.textAreacss} ></textarea><br></br>


<label className={styles.labelsFonts}>4. Provide links to Sharepoint, Teams or other additional sources of project documentation? <label className={styles.recolorss}>*</label> </label><br></br>
<textarea id="txtEvidenceofresearch" value={this.state.MySharepointCaseSecV} onChange={this.changeAIprojectSharepointSecIVtxtSecV.bind(this)} className={styles.textAreacss} ></textarea><br></br>


<div id="divbutton" hidden={this.state.SecIIbuttonVisble || this.state.SecIbuttonVisble}>  
{/* <Stack hidden={this.state.SecIIVisble && this.state.SecIVisble}> */}
<PrimaryButton text="Submit" onClick={this.OnSectionIIIBtnClick.bind(this)} styles={stackButtonStyles}  
className={styles.Mybutton} />
{/* </Stack> */}
</div><br></br><br></br>

</Stack>

}


{/* //SECI DATA Disable */}




{this.state.SecIDisableAfterSave==true && myitemId!="" && this.state.SecIIDisableAfterSave == true &&

<Stack>
<label>Six</label>
<label className={styles.labelsFonts}>1. Project System Name </label><br></br>
<label className={styles.labelsFonts}>{this.state.ProjSystemName}</label><br></br>
<label className={styles.labelsFonts}>2. Project Classification <label className={styles.recolorss}>*</label> </label><br></br>
     <Dropdown className={styles.onlyFont}
                  placeholder="Select Project Classification"
                  options={this.state.ProjectClassListItemsSecIII} 
                  styles={dropdownStyles}
                  selectedKey={this.state.MyProjectClassVal ? this.state.MyProjectClassVal : undefined} 
                  onChange={this.handleChangeProjClassValueSecIII.bind(this)}
                /><br></br>
<label className={styles.labelsFonts}>3. What is the purpose and key concept(s) of the project/system? </label><br></br>
<label className={styles.labelsFonts}>{this.state.Purpose}</label><br></br>
<b><label className={styles.labelsFonts}>4. Bussiness Owner</label></b><br/>
<label className={styles.labelsFonts}>{this.state.BussinessOwnerName == null ? 'N/A' : this.state.BussinessOwnerName}</label><br/><br/>
<b><label className={styles.labelsFonts}>5. Technical Owner</label></b><br/>
<label className={styles.labelsFonts}>{this.state.TechnicalOwnerName == null ? 'N/A' : this.state.TechnicalOwnerName}</label><br/><br/>
<b><label className={styles.labelsFonts}>6. Geography</label></b><br></br>
<label className={styles.labelsFonts}>{this.state.MyGeographyVal}</label><br/>
<b><label className={styles.labelsFonts}>7. Capco Domain </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.MyCapcoDomainVal}</label><br/>
<b><label className={styles.labelsFonts}>8.Client/Audience </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.Client}</label><br/>
<b><label className={styles.labelsFonts}>9. Sales App Opportunity ID </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.SalesId}</label><br/>
<b><label className={styles.labelsFonts}>10. Project Stage </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.MyProjectStage}</label><br/>

<b><label className={styles.labelsFonts}>11. Scope of project/system  </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.ScopeofProject}</label><br/>

<b><label className={styles.labelsFonts}>12. Not in scope of project/system </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.NotScopeofProject}</label><br/>

<b><label className={styles.labelsFonts}>13. Evidence of research </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.Evidenceofresearch}</label><br/>
</Stack>
  
}

{this.state.SecIIIVisble == true &&  myitemId!="" &&

<Stack>

  <label>Seven</label>


<label className={styles.labelsFonts}>1. Project System Name </label><br></br>
<label className={styles.labelsFonts}>{this.state.ProjSystemName}</label><br></br>
<label className={styles.labelsFonts}>2. Project Classification <label className={styles.recolorss}>*</label> </label><br></br>
     <Dropdown className={styles.onlyFont}
                  placeholder="Select Project Classification"
                  options={this.state.ProjectClassListItemsSecIII}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyProjectClassVal ? this.state.MyProjectClassVal : undefined} 
                  onChange={this.handleChangeProjClassValueSecIII.bind(this)}
                /><br></br>
<label className={styles.labelsFonts}>3. What is the purpose and key concept(s) of the project/system? </label><br></br>
<label className={styles.labelsFonts}>{this.state.Purpose}</label><br></br>
<b><label className={styles.labelsFonts}>4. Bussiness Owner</label></b><br/>
<label className={styles.labelsFonts}>{this.state.BussinessOwnerName == null ? 'N/A' : this.state.BussinessOwnerName}</label><br/><br/>
<b><label className={styles.labelsFonts}>5. Technical Owner</label></b><br/>
<label className={styles.labelsFonts}>{this.state.TechnicalOwnerName == null ? 'N/A' : this.state.TechnicalOwnerName}</label><br/><br/>
<b><label className={styles.labelsFonts}>6. Geography</label></b><br></br>
<label className={styles.labelsFonts}>{this.state.MyGeographyVal}</label><br/>
<b><label className={styles.labelsFonts}>7. Capco Domain </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.MyCapcoDomainVal}</label><br/>
<b><label className={styles.labelsFonts}>8.Client/Audience </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.Client}</label><br/>
<b><label className={styles.labelsFonts}>9. Sales App Opportunity ID </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.SalesId}</label><br/>
<b><label className={styles.labelsFonts}>10. Project Stage </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.MyProjectStage}</label><br/>

<b><label className={styles.labelsFonts}>11. Scope of project/system  </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.ScopeofProject}</label><br/>

<b><label className={styles.labelsFonts}>12. Not in scope of project/system </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.NotScopeofProject}</label><br/>

<b><label className={styles.labelsFonts}>13. Evidence of research </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.Evidenceofresearch}</label><br></br>


<b><label className={styles.test}>Data and Business Use Case Risk Level of AI Project/System </label></b><br></br>
<b><label className={styles.test}>Personal & Company Data </label></b><br></br>

 
{/* //SecII Values */}

<label className={styles.labelsFonts}>1. Will the AI system capture, store or process personal data? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISytemCaptureSectionIIVal}</label><br/>


<label className={styles.labelsFonts}>2. Will the AI system be augmented with Capco or client data? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystemArgumenStectionIIVal}</label><br/>


<label className={styles.labelsFonts}> Please describe what and how </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyDescribewhatandhow}</label> <br></br>

<b><label className={styles.test}>Prohibited AI2 </label></b><br></br><br></br>

<label className={styles.labelsFonts}>3. Does the AI system rely on the untargeted collection of facial images from the internet or CCTV footage to build facial recognition databases? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemCCTVfootageSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>4. Does the AI system rely on subliminal, purposefully manipulative, or deceptive techniques to influence individuals' behavior? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemrelySectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>5. Does the AI system analyze or infer emotions of individuals within the workplace or educational institutions?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISysteminferemotionsSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>6. Does the AI system use biometric data to deduce or infer race, political opinions, trade union membership, religious or philosophical beliefs, sex life, or sexual orientation? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystembiometricSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>7. Does the AI system make risk assessments of individuals to identify or predict the risk that they will commit a criminal offense?  </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemriskassessmentsSectionIIVal}</label><br></br>
       
<label className={styles.labelsFonts}>8. Is the AI system involved in social scoring of individuals, potentially leading to detrimental or unfavorable treatment based on their behavior, characteristics, or personal circumstances?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystemSocialScoringsSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>9. Does the AI system engage in mass surveillance of individuals in public or private spaces without their explicit consent? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystemSocialScoringsSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>10. Does the AI system make significant legal or similar decisions (e.g., in employment, healthcare, education) without human review or possibility for appeal?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemleagalSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>11.Is the AI system designed to influence or manipulate political campaigns, voting behavior, or other democratic processes?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsysteminfluenceSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>12. Does the AI system make criminal risk assessments or predictions about individuals based on profiling or other biometric data?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemcriminalSectionIIVal}</label> <br></br>


<label className={styles.labelsFonts}>13. Does the AI system use real-time biometric identification in publicly accessible spaces for law enforcement purposes?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystembiometricSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>14. Does the AI system exploit vulnerabilities of individuals based on factors such as age, disability, or socio-economic status to influence their behavior? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemexploitSectionIIVal}</label> <br></br>


<b><label className={styles.test}>High Risk AI2 </label></b><br></br>

<label className={styles.labelsFonts}>1. Will the AI system be used to assess whether an individual is eligible to receive medical treatment or influence health outcomes?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemindividualiseligibleIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>2. Will the AI system be used to determine access to education, evaluate progress, or detect cheating in academic or training settings? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemeducationevaluateprogressIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>3. Will the AI system be used to assess eligibility for employment,promotions,loans,or housing?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemassesseligibilityemploymentIIValSecIV}</label> <br></br>

<label className={styles.labelsFonts}>4. Will the AI system be used to profile individuals or assess their risk of committing a crime?<label className={styles.recolorss}>*</label> </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemprofileindividualsIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>5.Will the AI system be used to operate or control robots, drones, medical devices, or other machinery?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemoperatecontrolrobotsIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>6. Will the AI system be trained using third-party restricted or non-public personal data without proper consent? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemtrainedthirdpartyrestrictedIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>7. Will the AI system make decisions or control actions that significantly impact individuals or groups, potentially causing fear or concern?<label className={styles.recolorss}>*</label> </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemdecisionscontrolactionssignificantlyIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>8. Will the AI system interact with a large number of individuals concerning highly sensitive or confidential matters?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemdividualsconcerninghighlysensitiveIIValSecIV}</label> <br></br>

<label className={styles.labelsFonts}>9. Will the AI system play a critical role in operating essential infrastructure (e.g., energy, transportation, healthcare)?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemcriticaloperatingessentialinfrastructureIIValSecIV}</label><br></br>



<label className={styles.labelsFonts}>10. Does the use of the AI system pose an increased risk of significant negative media coverage or reputational damage for Capco or its clients?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemincreasedsignificantnegativeIIValSecIV}</label><br></br>


<label className={styles.labelsFonts}>11. Could a failure of the AI system lead to significant financial losses, legal liabilities, or damage to others?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemleadsignificantfinanciallossesIIValSecIV}</label><br></br>


<label className={styles.labelsFonts}>12. Could a failure of the AI system impact Capco's ability to comply with applicable laws or regulations in a serious way?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemimpactCapcosapplicablelawsIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>13. Does the AI component represent a significant investment or hold strategic importance for Capco?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIcomponentrepresentsignificantinvestmentIIValSecIV}</label><br></br>


<label className={styles.labelsFonts}>14. Do the characteristics of the AI system suggest that there are inherent high risks that must be considered?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemsuggestinherenthighrisksIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>15. Will the AI system be deployed in any of the following regulated sectors:</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystemdeployedSecIV}</label><br></br>

<label className={styles.labelsFonts}>16. Regardless of any other responses above, does the AI system pose any significant risk of harm to individuals' health, safety, or fundamental rights.</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISharepointSecV}</label> 

  <br/>  
 

</Stack>

}


{this.state.SecvVisble == true &&  myitemId!="" &&

<Stack>

<label>Eight</label>

<label className={styles.labelsFonts}>1. Project System Name </label><br></br>
<label className={styles.labelsFonts}>{this.state.ProjSystemName}</label><br></br>
<label className={styles.labelsFonts}>2. Project Classification <label className={styles.recolorss}>*</label> </label><br></br>
<Dropdown className={styles.onlyFont}
                  placeholder="Select Project Classification"
                  options={this.state.ProjectClassListItemsSecIII} 
                  styles={dropdownStyles}
                  selectedKey={this.state.MyProjectClassVal ? this.state.MyProjectClassVal : undefined} 
                  onChange={this.handleChangeProjClassValueSecIII.bind(this)}/><br></br>

<label className={styles.labelsFonts}>3. What is the purpose and key concept(s) of the project/system? </label><br></br>
<label className={styles.labelsFonts}>{this.state.Purpose}</label><br></br>
<b><label className={styles.labelsFonts}>4. Bussiness Owner</label></b><br/>
<label className={styles.labelsFonts}>{this.state.BussinessOwnerName == null ? 'N/A' : this.state.BussinessOwnerName}</label><br/><br/>
<b><label className={styles.labelsFonts}>5. Technical Owner</label></b><br/>
<label className={styles.labelsFonts}>{this.state.TechnicalOwnerName == null ? 'N/A' : this.state.TechnicalOwnerName}</label><br/><br/>
<b><label className={styles.labelsFonts}>6. Geography</label></b><br></br>
<label className={styles.labelsFonts}>{this.state.MyGeographyVal}</label><br/>
<b><label className={styles.labelsFonts}>7. Capco Domain </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.MyCapcoDomainVal}</label><br/>
<b><label className={styles.labelsFonts}>8.Client/Audience </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.Client}</label><br/>
<b><label className={styles.labelsFonts}>9. Sales App Opportunity ID </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.SalesId}</label><br/>
<b><label className={styles.labelsFonts}>10. Project Stage </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.MyProjectStage}</label><br/>

<b><label className={styles.labelsFonts}>11. Scope of project/system  </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.ScopeofProject}</label><br/>

<b><label className={styles.labelsFonts}>12. Not in scope of project/system </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.NotScopeofProject}</label><br/>

<b><label className={styles.labelsFonts}>13. Evidence of research </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.Evidenceofresearch}</label><br></br>

 
{/* //SecII Values */}

<b><label className={styles.test}>Data and Business Use Case Risk Level of AI Project/System </label></b><br></br>
<b><label className={styles.test}>Personal & Company Data </label></b><br></br>

<label className={styles.labelsFonts}>1. Will the AI system capture, store or process personal data? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISytemCaptureSectionIIVal}</label><br/>


<label className={styles.labelsFonts}>2. Will the AI system be augmented with Capco or client data? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystemArgumenStectionIIVal}</label><br/>


<label className={styles.labelsFonts}> Please describe what and how </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyDescribewhatandhow}</label> <br></br>

<b><label className={styles.test}>Prohibited AI </label></b><br></br><br></br>

<label className={styles.labelsFonts}>3. Does the AI system rely on the untargeted collection of facial images from the internet or CCTV footage to build facial recognition databases? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemCCTVfootageSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>4. Does the AI system rely on subliminal, purposefully manipulative, or deceptive techniques to influence individuals' behavior? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemrelySectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>5. Does the AI system analyze or infer emotions of individuals within the workplace or educational institutions?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISysteminferemotionsSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>6. Does the AI system use biometric data to deduce or infer race, political opinions, trade union membership, religious or philosophical beliefs, sex life, or sexual orientation? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystembiometricSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>7. Does the AI system make risk assessments of individuals to identify or predict the risk that they will commit a criminal offense?  </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemriskassessmentsSectionIIVal}</label><br></br>
       
<label className={styles.labelsFonts}>8. Is the AI system involved in social scoring of individuals, potentially leading to detrimental or unfavorable treatment based on their behavior, characteristics, or personal circumstances?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystemSocialScoringsSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>9. Does the AI system engage in mass surveillance of individuals in public or private spaces without their explicit consent? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystemSocialScoringsSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>10. Does the AI system make significant legal or similar decisions (e.g., in employment, healthcare, education) without human review or possibility for appeal?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemleagalSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>11.Is the AI system designed to influence or manipulate political campaigns, voting behavior, or other democratic processes?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsysteminfluenceSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>12. Does the AI system make criminal risk assessments or predictions about individuals based on profiling or other biometric data?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemcriminalSectionIIVal}</label> <br></br>


<label className={styles.labelsFonts}>13. Does the AI system use real-time biometric identification in publicly accessible spaces for law enforcement purposes?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystembiometricSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>14. Does the AI system exploit vulnerabilities of individuals based on factors such as age, disability, or socio-economic status to influence their behavior? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemexploitSectionIIVal}</label> <br></br>


<b><label className={styles.test}>High Risk AI </label></b><br></br>

<label className={styles.labelsFonts}>1. Will the AI system be used to assess whether an individual is eligible to receive medical treatment or influence health outcomes?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemindividualiseligibleIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>2. Will the AI system be used to determine access to education, evaluate progress, or detect cheating in academic or training settings? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemeducationevaluateprogressIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>3. Will the AI system be used to assess eligibility for employment,promotions,loans,or housing?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemassesseligibilityemploymentIIValSecIV}</label> <br></br>

<label className={styles.labelsFonts}>4. Will the AI system be used to profile individuals or assess their risk of committing a crime?<label className={styles.recolorss}>*</label> </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemprofileindividualsIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>5.Will the AI system be used to operate or control robots, drones, medical devices, or other machinery?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemoperatecontrolrobotsIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>6. Will the AI system be trained using third-party restricted or non-public personal data without proper consent? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemtrainedthirdpartyrestrictedIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>7. Will the AI system make decisions or control actions that significantly impact individuals or groups, potentially causing fear or concern?<label className={styles.recolorss}>*</label> </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemdecisionscontrolactionssignificantlyIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>8. Will the AI system interact with a large number of individuals concerning highly sensitive or confidential matters?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemdividualsconcerninghighlysensitiveIIValSecIV}</label> <br></br>

<label className={styles.labelsFonts}>9. Will the AI system play a critical role in operating essential infrastructure (e.g., energy, transportation, healthcare)?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemcriticaloperatingessentialinfrastructureIIValSecIV}</label><br></br>



<label className={styles.labelsFonts}>10. Does the use of the AI system pose an increased risk of significant negative media coverage or reputational damage for Capco or its clients?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemincreasedsignificantnegativeIIValSecIV}</label><br></br>


<label className={styles.labelsFonts}>11. Could a failure of the AI system lead to significant financial losses, legal liabilities, or damage to others?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemleadsignificantfinanciallossesIIValSecIV}</label><br></br>


<label className={styles.labelsFonts}>12. Could a failure of the AI system impact Capco's ability to comply with applicable laws or regulations in a serious way?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemimpactCapcosapplicablelawsIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>13. Does the AI component represent a significant investment or hold strategic importance for Capco?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIcomponentrepresentsignificantinvestmentIIValSecIV}</label><br></br>


<label className={styles.labelsFonts}>14. Do the characteristics of the AI system suggest that there are inherent high risks that must be considered?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemsuggestinherenthighrisksIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>15. Will the AI system be deployed in any of the following regulated sectors:</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystemdeployedSecIV}</label><br></br>

<label className={styles.labelsFonts}>16. Regardless of any other responses above, does the AI system pose any significant risk of harm to individuals' health, safety, or fundamental rights.</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISharepointSecV}</label> <br></br>

<b><label className={styles.test}>Business Requirements, Architecture, and Design </label></b><br></br><br></br>

<label className={styles.labelsFonts}>1. Does the AI system use Generative AI or LLMs? <label className={styles.recolorss}>*</label> </label><br></br>
<Dropdown className={styles.onlyFont}
                  placeholder="Select Value"
                  options={this.state. AIsystemGenerativeListItemsSecV}
                  styles={dropdownStyles}
                  selectedKey={this.state.MyAIsystemGenerativeSecV ? this.state.MyAIsystemGenerativeSecV : undefined} onChange={this.handleAIsystemGenerativeSecV.bind(this)} 
                  /><br></br>

<label className={styles.labelsFonts}>2. Provide links to AI project/system Business Use Case and Requirements Specification documentation? <label className={styles.recolorss}>*</label> </label><br></br>
<textarea id="txtAIProjectBussinessSecIII" value={this.state.MyBusinessUseCaseSecV} onChange={this.changeAIprojectBussinesscaseSecIVtxtSecV.bind(this)} className={styles.textAreacss} ></textarea><br></br>

<label className={styles.labelsFonts}>3. Provide links to AI project/system Architecture and Design Specification documentation? <label className={styles.recolorss}>*</label> </label><br></br>
<textarea id="txtEvidenceofresearch" value={this.state.MyAIprojectArchitecureCaseSecV} onChange={this.changeAIprojectArchitectureSecIVtxtSecV.bind(this)} className={styles.textAreacss} ></textarea><br></br>


<label className={styles.labelsFonts}>4. Provide links to Sharepoint, Teams or other additional sources of project documentation? <label className={styles.recolorss}>*</label> </label><br></br>
<textarea id="txtEvidenceofresearch" value={this.state.MySharepointCaseSecV} onChange={this.changeAIprojectSharepointSecIVtxtSecV.bind(this)} className={styles.textAreacss} ></textarea><br></br>


<div id="divbutton">  
{/* <Stack hidden={this.state.SecIIVisble && this.state.SecIVisble}> */}
<PrimaryButton text="Update SecIII" onClick={this.OnUpdateSectionIIIBtnClick.bind(this)} styles={stackButtonStyles}  
className={styles.Mybutton} />
{/* </Stack> */}
</div><br></br><br></br>

</Stack>

}

{this.state.SecIIIfinalAfterSave== true &&  myitemId!="" &&

<Stack>
<label>Nine1</label>
<label className={styles.labelsFonts}>1. Project System Name </label><br></br>
<label className={styles.labelsFonts}>{this.state.ProjSystemName}</label><br></br>
<label className={styles.labelsFonts}>2. Project Classification <label className={styles.recolorss}>*</label> </label><br></br>
<label>{this.state.ProjectClasssText}</label><br></br>
<label className={styles.labelsFonts}>3. What is the purpose and key concept(s) of the project/system? </label><br></br>
<label className={styles.labelsFonts}>{this.state.Purpose}</label><br></br>
<b><label className={styles.labelsFonts}>4. Bussiness Owner</label></b><br/>
<label className={styles.labelsFonts}>{this.state.BussinessOwnerName == null ? 'N/A' : this.state.BussinessOwnerName}</label><br/><br/>
<b><label className={styles.labelsFonts}>5. Technical Owner</label></b><br/>
<label className={styles.labelsFonts}>{this.state.TechnicalOwnerName == null ? 'N/A' : this.state.TechnicalOwnerName}</label><br/><br/>
<b><label className={styles.labelsFonts}>6. Geography</label></b><br></br>
<label className={styles.labelsFonts}>{this.state.MyGeographyVal}</label><br/>
<b><label className={styles.labelsFonts}>7. Capco Domain </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.MyCapcoDomainVal}</label><br/>
<b><label className={styles.labelsFonts}>8.Client/Audience </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.Client}</label><br/>
<b><label className={styles.labelsFonts}>9. Sales App Opportunity ID </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.SalesId}</label><br/>
<b><label className={styles.labelsFonts}>10. Project Stage </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.MyProjectStage}</label><br/>

<b><label className={styles.labelsFonts}>11. Scope of project/system  </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.ScopeofProject}</label><br/>

<b><label className={styles.labelsFonts}>12. Not in scope of project/system </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.NotScopeofProject}</label><br/>

<b><label className={styles.labelsFonts}>13. Evidence of research </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.Evidenceofresearch}</label><br></br>


<b><label className={styles.test}>Data and Business Use Case Risk Level of AI Project/System </label></b><br></br>
<b><label className={styles.test}>Personal & Company Data </label></b><br></br>

 
{/* //SecII Values */}

<label className={styles.labelsFonts}>1. Will the AI system capture, store or process personal data? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISytemCaptureSectionIIVal}</label><br/>


<label className={styles.labelsFonts}>2. Will the AI system be augmented with Capco or client data? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystemArgumenStectionIIVal}</label><br/>


<label className={styles.labelsFonts}> Please describe what and how </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyDescribewhatandhow}</label> <br></br>

<b><label className={styles.test}>Prohibited AI3 </label></b><br></br><br></br>

<label className={styles.labelsFonts}>3. Does the AI system rely on the untargeted collection of facial images from the internet or CCTV footage to build facial recognition databases? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemCCTVfootageSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>4. Does the AI system rely on subliminal, purposefully manipulative, or deceptive techniques to influence individuals' behavior? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemrelySectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>5. Does the AI system analyze or infer emotions of individuals within the workplace or educational institutions?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISysteminferemotionsSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>6. Does the AI system use biometric data to deduce or infer race, political opinions, trade union membership, religious or philosophical beliefs, sex life, or sexual orientation? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystembiometricSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>7. Does the AI system make risk assessments of individuals to identify or predict the risk that they will commit a criminal offense?  </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemriskassessmentsSectionIIVal}</label><br></br>
       
<label className={styles.labelsFonts}>8. Is the AI system involved in social scoring of individuals, potentially leading to detrimental or unfavorable treatment based on their behavior, characteristics, or personal circumstances?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystemSocialScoringsSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>9. Does the AI system engage in mass surveillance of individuals in public or private spaces without their explicit consent? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystemSocialScoringsSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>10. Does the AI system make significant legal or similar decisions (e.g., in employment, healthcare, education) without human review or possibility for appeal?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemleagalSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>11.Is the AI system designed to influence or manipulate political campaigns, voting behavior, or other democratic processes?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsysteminfluenceSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>12. Does the AI system make criminal risk assessments or predictions about individuals based on profiling or other biometric data?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemcriminalSectionIIVal}</label> <br></br>


<label className={styles.labelsFonts}>13. Does the AI system use real-time biometric identification in publicly accessible spaces for law enforcement purposes?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystembiometricSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>14. Does the AI system exploit vulnerabilities of individuals based on factors such as age, disability, or socio-economic status to influence their behavior? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemexploitSectionIIVal}</label> <br></br>


<b><label className={styles.test}>High Risk AI3 </label></b><br></br>

<label className={styles.labelsFonts}>1. Will the AI system be used to assess whether an individual is eligible to receive medical treatment or influence health outcomes?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemindividualiseligibleIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>2. Will the AI system be used to determine access to education, evaluate progress, or detect cheating in academic or training settings? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemeducationevaluateprogressIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>3. Will the AI system be used to assess eligibility for employment,promotions,loans,or housing?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemassesseligibilityemploymentIIValSecIV}</label> <br></br>

<label className={styles.labelsFonts}>4. Will the AI system be used to profile individuals or assess their risk of committing a crime?<label className={styles.recolorss}>*</label> </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemprofileindividualsIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>5.Will the AI system be used to operate or control robots, drones, medical devices, or other machinery?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemoperatecontrolrobotsIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>6. Will the AI system be trained using third-party restricted or non-public personal data without proper consent? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemtrainedthirdpartyrestrictedIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>7. Will the AI system make decisions or control actions that significantly impact individuals or groups, potentially causing fear or concern?<label className={styles.recolorss}>*</label> </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemdecisionscontrolactionssignificantlyIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>8. Will the AI system interact with a large number of individuals concerning highly sensitive or confidential matters?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemdividualsconcerninghighlysensitiveIIValSecIV}</label> <br></br>

<label className={styles.labelsFonts}>9. Will the AI system play a critical role in operating essential infrastructure (e.g., energy, transportation, healthcare)?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemcriticaloperatingessentialinfrastructureIIValSecIV}</label><br></br>



<label className={styles.labelsFonts}>10. Does the use of the AI system pose an increased risk of significant negative media coverage or reputational damage for Capco or its clients?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemincreasedsignificantnegativeIIValSecIV}</label><br></br>


<label className={styles.labelsFonts}>11. Could a failure of the AI system lead to significant financial losses, legal liabilities, or damage to others?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemleadsignificantfinanciallossesIIValSecIV}</label><br></br>


<label className={styles.labelsFonts}>12. Could a failure of the AI system impact Capco's ability to comply with applicable laws or regulations in a serious way?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemimpactCapcosapplicablelawsIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>13. Does the AI component represent a significant investment or hold strategic importance for Capco?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIcomponentrepresentsignificantinvestmentIIValSecIV}</label><br></br>


<label className={styles.labelsFonts}>14. Do the characteristics of the AI system suggest that there are inherent high risks that must be considered?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemsuggestinherenthighrisksIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>15. Will the AI system be deployed in any of the following regulated sectors:</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystemdeployedSecIV}</label><br></br>

<label className={styles.labelsFonts}>16. Regardless of any other responses above, does the AI system pose any significant risk of harm to individuals' health, safety, or fundamental rights.</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISharepointSecV}</label> <br></br>

<b><label className={styles.test}>Business Requirements, Architecture, and Design </label></b><br></br><br></br>

<label className={styles.labelsFonts}>1. Does the AI system use Generative AI or LLMs?</label><br></br>
<label>{this.state.MyAIsystemGenerativeSecV}</label><br></br>

<label className={styles.labelsFonts}>2. Provide links to AI project/system Business Use Case and Requirements Specification documentation?  </label><br></br>
<label>{this.state.MyBusinessUseCaseSecV}</label><br></br>

<label className={styles.labelsFonts}>3. Provide links to AI project/system Architecture and Design Specification documentation?  </label><br></br>
<label>{this.state.MyAIprojectArchitecureCaseSecV}</label><br></br>


<label className={styles.labelsFonts}>4. Provide links to Sharepoint, Teams or other additional sources of project documentation?</label><br></br>
<label>{this.state.MySharepointCaseSecV}</label>  


  <br/>  
</Stack>

}

{this.state.SecClosed== true &&  myitemId!="" &&

<Stack>

  
<label>Eleven</label>
<label className={styles.labelsFonts}>1. Project System Name </label><br></br>
<label className={styles.labelsFonts}>{this.state.ProjSystemName}</label><br></br>
<label className={styles.labelsFonts}>2. Project Classification </label><br></br>
<label>{this.state.MyProjectClassifications}</label><br></br>
<label className={styles.labelsFonts}>3. What is the purpose and key concept(s) of the project/system? </label><br></br>
<label className={styles.labelsFonts}>{this.state.Purpose}</label><br></br>
<b><label className={styles.labelsFonts}>4. Bussiness Owner</label></b><br/>
<label className={styles.labelsFonts}>{this.state.BussinessOwnerName == null ? 'N/A' : this.state.BussinessOwnerName}</label><br/><br/>
<b><label className={styles.labelsFonts}>5. Technical Owner</label></b><br/>
<label className={styles.labelsFonts}>{this.state.TechnicalOwnerName == null ? 'N/A' : this.state.TechnicalOwnerName}</label><br/><br/>
<b><label className={styles.labelsFonts}>6. Geography</label></b><br></br>
<label className={styles.labelsFonts}>{this.state.MyGeographyVal}</label><br/>
<b><label className={styles.labelsFonts}>7. Capco Domain </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.MyCapcoDomainVal}</label><br/>
<b><label className={styles.labelsFonts}>8.Client/Audience </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.Client}</label><br/>
<b><label className={styles.labelsFonts}>9. Sales App Opportunity ID </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.SalesId}</label><br/>
<b><label className={styles.labelsFonts}>10. Project Stage </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.MyProjectStage}</label><br/>

<b><label className={styles.labelsFonts}>11. Scope of project/system  </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.ScopeofProject}</label><br/>

<b><label className={styles.labelsFonts}>12. Not in scope of project/system </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.NotScopeofProject}</label><br/>

<b><label className={styles.labelsFonts}>13. Evidence of research </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.Evidenceofresearch}</label><br></br>

 
{/* //SecII Values */}

<b><label className={styles.test}>Data and Business Use Case Risk Level of AI Project/System </label></b><br></br>
<b><label className={styles.test}>Personal & Company Data </label></b><br></br>

<label className={styles.labelsFonts}>1. Will the AI system capture, store or process personal data? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISytemCaptureSectionIIVal}</label><br/>


<label className={styles.labelsFonts}>2. Will the AI system be augmented with Capco or client data? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystemArgumenStectionIIVal}</label><br/>


<label className={styles.labelsFonts}> Please describe what and how </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyDescribewhatandhow}</label> <br></br>

<b><label className={styles.test}>Prohibited AI </label></b><br></br><br></br>

<label className={styles.labelsFonts}>3. Does the AI system rely on the untargeted collection of facial images from the internet or CCTV footage to build facial recognition databases? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemCCTVfootageSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>4. Does the AI system rely on subliminal, purposefully manipulative, or deceptive techniques to influence individuals' behavior? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemrelySectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>5. Does the AI system analyze or infer emotions of individuals within the workplace or educational institutions?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISysteminferemotionsSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>6. Does the AI system use biometric data to deduce or infer race, political opinions, trade union membership, religious or philosophical beliefs, sex life, or sexual orientation? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystembiometricSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>7. Does the AI system make risk assessments of individuals to identify or predict the risk that they will commit a criminal offense?  </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemriskassessmentsSectionIIVal}</label><br></br>
       
<label className={styles.labelsFonts}>8. Is the AI system involved in social scoring of individuals, potentially leading to detrimental or unfavorable treatment based on their behavior, characteristics, or personal circumstances?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystemSocialScoringsSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>9. Does the AI system engage in mass surveillance of individuals in public or private spaces without their explicit consent? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystemSocialScoringsSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>10. Does the AI system make significant legal or similar decisions (e.g., in employment, healthcare, education) without human review or possibility for appeal?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemleagalSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>11.Is the AI system designed to influence or manipulate political campaigns, voting behavior, or other democratic processes?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsysteminfluenceSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>12. Does the AI system make criminal risk assessments or predictions about individuals based on profiling or other biometric data?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemcriminalSectionIIVal}</label> <br></br>


<label className={styles.labelsFonts}>13. Does the AI system use real-time biometric identification in publicly accessible spaces for law enforcement purposes?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystembiometricSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>14. Does the AI system exploit vulnerabilities of individuals based on factors such as age, disability, or socio-economic status to influence their behavior? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemexploitSectionIIVal}</label> <br></br>


<b><label className={styles.test}>High Risk AI4 </label></b><br></br>

<label className={styles.labelsFonts}>1. Will the AI system be used to assess whether an individual is eligible to receive medical treatment or influence health outcomes?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemindividualiseligibleIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>2. Will the AI system be used to determine access to education, evaluate progress, or detect cheating in academic or training settings? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemeducationevaluateprogressIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>3. Will the AI system be used to assess eligibility for employment,promotions,loans,or housing?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemassesseligibilityemploymentIIValSecIV}</label> <br></br>

<label className={styles.labelsFonts}>4. Will the AI system be used to profile individuals or assess their risk of committing a crime?<label className={styles.recolorss}>*</label> </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemprofileindividualsIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>5.Will the AI system be used to operate or control robots, drones, medical devices, or other machinery?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemoperatecontrolrobotsIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>6. Will the AI system be trained using third-party restricted or non-public personal data without proper consent? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemtrainedthirdpartyrestrictedIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>7. Will the AI system make decisions or control actions that significantly impact individuals or groups, potentially causing fear or concern?<label className={styles.recolorss}>*</label> </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemdecisionscontrolactionssignificantlyIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>8. Will the AI system interact with a large number of individuals concerning highly sensitive or confidential matters?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemdividualsconcerninghighlysensitiveIIValSecIV}</label> <br></br>

<label className={styles.labelsFonts}>9. Will the AI system play a critical role in operating essential infrastructure (e.g., energy, transportation, healthcare)?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemcriticaloperatingessentialinfrastructureIIValSecIV}</label><br></br>



<label className={styles.labelsFonts}>10. Does the use of the AI system pose an increased risk of significant negative media coverage or reputational damage for Capco or its clients?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemincreasedsignificantnegativeIIValSecIV}</label><br></br>


<label className={styles.labelsFonts}>11. Could a failure of the AI system lead to significant financial losses, legal liabilities, or damage to others?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemleadsignificantfinanciallossesIIValSecIV}</label><br></br>


<label className={styles.labelsFonts}>12. Could a failure of the AI system impact Capco's ability to comply with applicable laws or regulations in a serious way?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemimpactCapcosapplicablelawsIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>13. Does the AI component represent a significant investment or hold strategic importance for Capco?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIcomponentrepresentsignificantinvestmentIIValSecIV}</label><br></br>


<label className={styles.labelsFonts}>14. Do the characteristics of the AI system suggest that there are inherent high risks that must be considered?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemsuggestinherenthighrisksIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>15. Will the AI system be deployed in any of the following regulated sectors:</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystemdeployedSecIV}</label><br></br>

<label className={styles.labelsFonts}>16. Regardless of any other responses above, does the AI system pose any significant risk of harm to individuals' health, safety, or fundamental rights.</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISharepointSecV}</label> <br></br>

</Stack>
}


{this.state.showApprovalbuttons== true &&  myitemId!="" &&
<Stack>

<label>Twelve</label>
<b><label className={styles.labelsFonts}>1. Project System Name </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.ProjSystemName}</label><br></br>
<b><label className={styles.labelsFonts}>2. Project Classification </label></b><br></br>
<label>{this.state.MyProjectClassifications}</label><br></br>
<b><label className={styles.labelsFonts}>3. What is the purpose and key concept(s) of the project/system? </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.Purpose}</label><br></br>
<b><label className={styles.labelsFonts}>4. Bussiness Owner</label></b><br/>
<label className={styles.labelsFonts}>{this.state.BussinessOwnerName == null ? 'N/A' : this.state.BussinessOwnerName}</label><br/><br/>
<b><label className={styles.labelsFonts}>5. Technical Owner</label></b><br/>
<label className={styles.labelsFonts}>{this.state.TechnicalOwnerName == null ? 'N/A' : this.state.TechnicalOwnerName}</label><br/><br/>
<b><label className={styles.labelsFonts}>6. Geography</label></b><br></br>
<label className={styles.labelsFonts}>{this.state.MyGeographyVal}</label><br/>
<b><label className={styles.labelsFonts}>7. Capco Domain </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.MyCapcoDomainVal}</label><br/>
<b><label className={styles.labelsFonts}>8.Client/Audience </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.Client}</label><br/>
<b><label className={styles.labelsFonts}>9. Sales App Opportunity ID </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.SalesId}</label><br/>
<b><label className={styles.labelsFonts}>10. Project Stage </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.MyProjectStage}</label><br/>

<b><label className={styles.labelsFonts}>11. Scope of project/system  </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.ScopeofProject}</label><br/>

<b><label className={styles.labelsFonts}>12. Not in scope of project/system </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.NotScopeofProject}</label><br/>

<b><label className={styles.labelsFonts}>13. Evidence of research </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.Evidenceofresearch}</label><br></br>

 
{/* //SecII Values */}

<b><label className={styles.test}>Data and Business Use Case Risk Level of AI Project/System </label></b><br></br>
<b><label className={styles.test}>Personal & Company Data </label></b><br></br>

<label className={styles.labelsFonts}>1. Will the AI system capture, store or process personal data? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISytemCaptureSectionIIVal}</label><br/>


<label className={styles.labelsFonts}>2. Will the AI system be augmented with Capco or client data? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystemArgumenStectionIIVal}</label><br/>


<label className={styles.labelsFonts}> Please describe what and how </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyDescribewhatandhow}</label> <br></br>

<b><label className={styles.test}>Prohibited AI </label></b><br></br><br></br>

<label className={styles.labelsFonts}>3. Does the AI system rely on the untargeted collection of facial images from the internet or CCTV footage to build facial recognition databases? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemCCTVfootageSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>4. Does the AI system rely on subliminal, purposefully manipulative, or deceptive techniques to influence individuals' behavior? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemrelySectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>5. Does the AI system analyze or infer emotions of individuals within the workplace or educational institutions?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISysteminferemotionsSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>6. Does the AI system use biometric data to deduce or infer race, political opinions, trade union membership, religious or philosophical beliefs, sex life, or sexual orientation? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystembiometricSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>7. Does the AI system make risk assessments of individuals to identify or predict the risk that they will commit a criminal offense?  </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemriskassessmentsSectionIIVal}</label><br></br>
       
<label className={styles.labelsFonts}>8. Is the AI system involved in social scoring of individuals, potentially leading to detrimental or unfavorable treatment based on their behavior, characteristics, or personal circumstances?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystemSocialScoringsSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>9. Does the AI system engage in mass surveillance of individuals in public or private spaces without their explicit consent? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystemSocialScoringsSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>10. Does the AI system make significant legal or similar decisions (e.g., in employment, healthcare, education) without human review or possibility for appeal?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemleagalSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>11.Is the AI system designed to influence or manipulate political campaigns, voting behavior, or other democratic processes?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsysteminfluenceSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>12. Does the AI system make criminal risk assessments or predictions about individuals based on profiling or other biometric data?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemcriminalSectionIIVal}</label> <br></br>


<label className={styles.labelsFonts}>13. Does the AI system use real-time biometric identification in publicly accessible spaces for law enforcement purposes?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystembiometricSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>14. Does the AI system exploit vulnerabilities of individuals based on factors such as age, disability, or socio-economic status to influence their behavior? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemexploitSectionIIVal}</label> <br></br>


<b><label className={styles.test}>High Risk AI </label></b><br></br>

<label className={styles.labelsFonts}>1. Will the AI system be used to assess whether an individual is eligible to receive medical treatment or influence health outcomes?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemindividualiseligibleIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>2. Will the AI system be used to determine access to education, evaluate progress, or detect cheating in academic or training settings? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemeducationevaluateprogressIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>3. Will the AI system be used to assess eligibility for employment,promotions,loans,or housing?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemassesseligibilityemploymentIIValSecIV}</label> <br></br>

<label className={styles.labelsFonts}>4. Will the AI system be used to profile individuals or assess their risk of committing a crime?<label className={styles.recolorss}>*</label> </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemprofileindividualsIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>5.Will the AI system be used to operate or control robots, drones, medical devices, or other machinery?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemoperatecontrolrobotsIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>6. Will the AI system be trained using third-party restricted or non-public personal data without proper consent? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemtrainedthirdpartyrestrictedIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>7. Will the AI system make decisions or control actions that significantly impact individuals or groups, potentially causing fear or concern?<label className={styles.recolorss}>*</label> </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemdecisionscontrolactionssignificantlyIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>8. Will the AI system interact with a large number of individuals concerning highly sensitive or confidential matters?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemdividualsconcerninghighlysensitiveIIValSecIV}</label> <br></br>

<label className={styles.labelsFonts}>9. Will the AI system play a critical role in operating essential infrastructure (e.g., energy, transportation, healthcare)?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemcriticaloperatingessentialinfrastructureIIValSecIV}</label><br></br>



<label className={styles.labelsFonts}>10. Does the use of the AI system pose an increased risk of significant negative media coverage or reputational damage for Capco or its clients?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemincreasedsignificantnegativeIIValSecIV}</label><br></br>


<label className={styles.labelsFonts}>11. Could a failure of the AI system lead to significant financial losses, legal liabilities, or damage to others?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemleadsignificantfinanciallossesIIValSecIV}</label><br></br>


<label className={styles.labelsFonts}>12. Could a failure of the AI system impact Capco's ability to comply with applicable laws or regulations in a serious way?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemimpactCapcosapplicablelawsIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>13. Does the AI component represent a significant investment or hold strategic importance for Capco?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIcomponentrepresentsignificantinvestmentIIValSecIV}</label><br></br>


<label className={styles.labelsFonts}>14. Do the characteristics of the AI system suggest that there are inherent high risks that must be considered?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemsuggestinherenthighrisksIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>15. Will the AI system be deployed in any of the following regulated sectors:</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystemdeployedSecIV}</label><br></br>

<label className={styles.labelsFonts}>16. Regardless of any other responses above, does the AI system pose any significant risk of harm to individuals' health, safety, or fundamental rights.</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISharepointSecV}</label> <br></br>

<div id="divbutton">  

<PrimaryButton text="Level1 Approval"  styles={stackButtonStyles}  
className={styles.Mybutton} onClick={this.OnBtnApproveLevel1Click.bind(this)} /><br></br>

<PrimaryButton text="Level1 Rejection"  styles={stackButtonStyles}  
className={styles.Mybutton} onClick={this.OnBtnRejectLevel1Click.bind(this)} />
</div><br></br><br></br>

</Stack>

}

{this.state.showApprovalbuttonsLevel2== true &&  myitemId!="" &&
<Stack>

<label>Thirteen</label>
<b><label className={styles.labelsFonts}>1. Project System Name </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.ProjSystemName}</label><br></br>
<b><label className={styles.labelsFonts}>2. Project Classification <label className={styles.recolorss}>*</label> </label></b><br></br>
<label>{this.state.MyProjectClassifications}</label><br></br>
<b><label className={styles.labelsFonts}>3. What is the purpose and key concept(s) of the project/system? </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.Purpose}</label><br></br>
<b><label className={styles.labelsFonts}>4. Bussiness Owner</label></b><br/>
<label className={styles.labelsFonts}>{this.state.BussinessOwnerName == null ? 'N/A' : this.state.BussinessOwnerName}</label><br/><br/>
<b><label className={styles.labelsFonts}>5. Technical Owner</label></b><br/>
<label className={styles.labelsFonts}>{this.state.TechnicalOwnerName == null ? 'N/A' : this.state.TechnicalOwnerName}</label><br/><br/>
<b><label className={styles.labelsFonts}>6. Geography</label></b><br></br>
<label className={styles.labelsFonts}>{this.state.MyGeographyVal}</label><br/>
<b><label className={styles.labelsFonts}>7. Capco Domain </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.MyCapcoDomainVal}</label><br/>
<b><label className={styles.labelsFonts}>8.Client/Audience </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.Client}</label><br/>
<b><label className={styles.labelsFonts}>9. Sales App Opportunity ID </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.SalesId}</label><br/>
<b><label className={styles.labelsFonts}>10. Project Stage </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.MyProjectStage}</label><br/>

<b><label className={styles.labelsFonts}>11. Scope of project/system  </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.ScopeofProject}</label><br/>

<b><label className={styles.labelsFonts}>12. Not in scope of project/system </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.NotScopeofProject}</label><br/>

<b><label className={styles.labelsFonts}>13. Evidence of research </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.Evidenceofresearch}</label><br></br>

 
{/* //SecII Values */}

<b><label className={styles.test}>Data and Business Use Case Risk Level of AI Project/System </label></b><br></br>
<b><label className={styles.test}>Personal & Company Data </label></b><br></br>

<label className={styles.labelsFonts}>1. Will the AI system capture, store or process personal data? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISytemCaptureSectionIIVal}</label><br/>


<label className={styles.labelsFonts}>2. Will the AI system be augmented with Capco or client data? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystemArgumenStectionIIVal}</label><br/>


<label className={styles.labelsFonts}> Please describe what and how </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyDescribewhatandhow}</label> <br></br>

<b><label className={styles.test}>Prohibited AI </label></b><br></br><br></br>

<label className={styles.labelsFonts}>3. Does the AI system rely on the untargeted collection of facial images from the internet or CCTV footage to build facial recognition databases? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemCCTVfootageSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>4. Does the AI system rely on subliminal, purposefully manipulative, or deceptive techniques to influence individuals' behavior? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemrelySectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>5. Does the AI system analyze or infer emotions of individuals within the workplace or educational institutions?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISysteminferemotionsSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>6. Does the AI system use biometric data to deduce or infer race, political opinions, trade union membership, religious or philosophical beliefs, sex life, or sexual orientation? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystembiometricSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>7. Does the AI system make risk assessments of individuals to identify or predict the risk that they will commit a criminal offense?  </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemriskassessmentsSectionIIVal}</label><br></br>
       
<label className={styles.labelsFonts}>8. Is the AI system involved in social scoring of individuals, potentially leading to detrimental or unfavorable treatment based on their behavior, characteristics, or personal circumstances?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystemSocialScoringsSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>9. Does the AI system engage in mass surveillance of individuals in public or private spaces without their explicit consent? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystemSocialScoringsSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>10. Does the AI system make significant legal or similar decisions (e.g., in employment, healthcare, education) without human review or possibility for appeal?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemleagalSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>11.Is the AI system designed to influence or manipulate political campaigns, voting behavior, or other democratic processes?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsysteminfluenceSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>12. Does the AI system make criminal risk assessments or predictions about individuals based on profiling or other biometric data?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemcriminalSectionIIVal}</label> <br></br>


<label className={styles.labelsFonts}>13. Does the AI system use real-time biometric identification in publicly accessible spaces for law enforcement purposes?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystembiometricSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>14. Does the AI system exploit vulnerabilities of individuals based on factors such as age, disability, or socio-economic status to influence their behavior? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemexploitSectionIIVal}</label> <br></br>


<b><label className={styles.test}>High Risk AI </label></b><br></br>

<label className={styles.labelsFonts}>1. Will the AI system be used to assess whether an individual is eligible to receive medical treatment or influence health outcomes?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemindividualiseligibleIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>2. Will the AI system be used to determine access to education, evaluate progress, or detect cheating in academic or training settings? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemeducationevaluateprogressIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>3. Will the AI system be used to assess eligibility for employment,promotions,loans,or housing?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemassesseligibilityemploymentIIValSecIV}</label> <br></br>

<label className={styles.labelsFonts}>4. Will the AI system be used to profile individuals or assess their risk of committing a crime?<label className={styles.recolorss}>*</label> </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemprofileindividualsIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>5.Will the AI system be used to operate or control robots, drones, medical devices, or other machinery?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemoperatecontrolrobotsIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>6. Will the AI system be trained using third-party restricted or non-public personal data without proper consent? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemtrainedthirdpartyrestrictedIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>7. Will the AI system make decisions or control actions that significantly impact individuals or groups, potentially causing fear or concern?<label className={styles.recolorss}>*</label> </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemdecisionscontrolactionssignificantlyIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>8. Will the AI system interact with a large number of individuals concerning highly sensitive or confidential matters?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemdividualsconcerninghighlysensitiveIIValSecIV}</label> <br></br>

<label className={styles.labelsFonts}>9. Will the AI system play a critical role in operating essential infrastructure (e.g., energy, transportation, healthcare)?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemcriticaloperatingessentialinfrastructureIIValSecIV}</label><br></br>



<label className={styles.labelsFonts}>10. Does the use of the AI system pose an increased risk of significant negative media coverage or reputational damage for Capco or its clients?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemincreasedsignificantnegativeIIValSecIV}</label><br></br>


<label className={styles.labelsFonts}>11. Could a failure of the AI system lead to significant financial losses, legal liabilities, or damage to others?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemleadsignificantfinanciallossesIIValSecIV}</label><br></br>


<label className={styles.labelsFonts}>12. Could a failure of the AI system impact Capco's ability to comply with applicable laws or regulations in a serious way?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemimpactCapcosapplicablelawsIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>13. Does the AI component represent a significant investment or hold strategic importance for Capco?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIcomponentrepresentsignificantinvestmentIIValSecIV}</label><br></br>


<label className={styles.labelsFonts}>14. Do the characteristics of the AI system suggest that there are inherent high risks that must be considered?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemsuggestinherenthighrisksIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>15. Will the AI system be deployed in any of the following regulated sectors:</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystemdeployedSecIV}</label><br></br>

<label className={styles.labelsFonts}>16. Regardless of any other responses above, does the AI system pose any significant risk of harm to individuals' health, safety, or fundamental rights.</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISharepointSecV}</label> <br></br>

<div id="divbutton">  

<PrimaryButton text="Level2 Approval"  styles={stackButtonStyles}  
className={styles.Mybutton} onClick={this.OnBtnApproveLevel2Click.bind(this)} /><br></br>

<PrimaryButton text="Level2 Rejection"  styles={stackButtonStyles}  
className={styles.Mybutton} onClick={this.OnBtnRejectLevel2Click.bind(this)} />
</div><br></br><br></br>

</Stack>

}


{this.state.showRequestSectionIIIbutton== true &&  myitemId!="" &&

<Stack>
<label>Five</label>
<b><label className={styles.labelsFonts}>1. Project System Name </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.ProjSystemName}</label><br></br>
<b><label>Project Classification</label></b><br></br>
<label className={styles.labelsFonts}>{this.state.MyProjectClassifications}</label><br/>

<b><label className={styles.labelsFonts}>2. Project Classification <label className={styles.recolorss}>*</label></label></b><br></br>
     <Dropdown className={styles.onlyFont}
                  placeholder="Select Project Classification"
                  options={this.state.ProjectClassListItemsSecIII} 
                  styles={dropdownStyles}
                  selectedKey={this.state.MyProjectClassVal ? this.state.MyProjectClassVal : undefined} 
                  onChange={this.handleChangeProjClassValueSecIII.bind(this)}
                /><br></br>
<b><label className={styles.labelsFonts}>3. What is the purpose and key concept(s) of the project/system? </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.Purpose}</label><br></br>
<b><label className={styles.labelsFonts}>4. Bussiness Owner</label></b><br/>
<label className={styles.labelsFonts}>{this.state.BussinessOwnerName == null ? 'N/A' : this.state.BussinessOwnerName}</label><br/><br/>
<b><label className={styles.labelsFonts}>5. Technical Owner</label></b><br/>
<label className={styles.labelsFonts}>{this.state.TechnicalOwnerName == null ? 'N/A' : this.state.TechnicalOwnerName}</label><br/><br/>
<b><label className={styles.labelsFonts}>6. Geography</label></b><br></br>
<label className={styles.labelsFonts}>{this.state.MyGeographyVal}</label><br/>
<b><label className={styles.labelsFonts}>7. Capco Domain </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.MyCapcoDomainVal}</label><br></br>
<b><label className={styles.labelsFonts}>8.Client/Audience </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.Client}</label><br/>
<b><label className={styles.labelsFonts}>9. Sales App Opportunity ID </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.SalesId}</label><br/>
<b><label className={styles.labelsFonts}>10. Project Stage </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.MyProjectStage}</label><br/>

<b><label className={styles.labelsFonts}>11. Scope of project/system  </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.ScopeofProject}</label><br/>

<b><label className={styles.labelsFonts}>12. Not in scope of project/system </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.NotScopeofProject}</label><br/>

<b><label className={styles.labelsFonts}>13. Evidence of research </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.Evidenceofresearch}</label><br/>

<b><label className={styles.test}>Data and Business Use Case Risk Level of AI Project/System </label></b><br></br>
<b><label className={styles.test}>Personal & Company Data </label></b><br></br>

<label className={styles.labelsFonts}>1. Will the AI system capture, store or process personal data? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISytemCaptureSectionIIVal}</label><br/>


<label className={styles.labelsFonts}>2. Will the AI system be augmented with Capco or client data? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystemArgumenStectionIIVal}</label><br/>


<label className={styles.labelsFonts}> Please describe what and how </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyDescribewhatandhow}</label> <br></br>

<b><label className={styles.test}>Prohibited AI </label></b><br></br><br></br>

<label className={styles.labelsFonts}>3. Does the AI system rely on the untargeted collection of facial images from the internet or CCTV footage to build facial recognition databases? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemCCTVfootageSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>4. Does the AI system rely on subliminal, purposefully manipulative, or deceptive techniques to influence individuals' behavior? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemrelySectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>5. Does the AI system analyze or infer emotions of individuals within the workplace or educational institutions?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISysteminferemotionsSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>6. Does the AI system use biometric data to deduce or infer race, political opinions, trade union membership, religious or philosophical beliefs, sex life, or sexual orientation? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystembiometricSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>7. Does the AI system make risk assessments of individuals to identify or predict the risk that they will commit a criminal offense?  </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemriskassessmentsSectionIIVal}</label><br></br>
       
<label className={styles.labelsFonts}>8. Is the AI system involved in social scoring of individuals, potentially leading to detrimental or unfavorable treatment based on their behavior, characteristics, or personal circumstances?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystemSocialScoringsSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>9. Does the AI system engage in mass surveillance of individuals in public or private spaces without their explicit consent? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystemSocialScoringsSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>10. Does the AI system make significant legal or similar decisions (e.g., in employment, healthcare, education) without human review or possibility for appeal?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemleagalSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>11.Is the AI system designed to influence or manipulate political campaigns, voting behavior, or other democratic processes?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsysteminfluenceSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>12. Does the AI system make criminal risk assessments or predictions about individuals based on profiling or other biometric data?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemcriminalSectionIIVal}</label> <br></br>


<label className={styles.labelsFonts}>13. Does the AI system use real-time biometric identification in publicly accessible spaces for law enforcement purposes?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystembiometricSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>14. Does the AI system exploit vulnerabilities of individuals based on factors such as age, disability, or socio-economic status to influence their behavior? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemexploitSectionIIVal}</label> <br></br>


<b><label className={styles.test}>High Risk AI </label></b><br></br>

<label className={styles.labelsFonts}>1. Will the AI system be used to assess whether an individual is eligible to receive medical treatment or influence health outcomes?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemindividualiseligibleIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>2. Will the AI system be used to determine access to education, evaluate progress, or detect cheating in academic or training settings? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemeducationevaluateprogressIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>3. Will the AI system be used to assess eligibility for employment,promotions,loans,or housing?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemassesseligibilityemploymentIIValSecIV}</label> <br></br>

<label className={styles.labelsFonts}>4. Will the AI system be used to profile individuals or assess their risk of committing a crime?<label className={styles.recolorss}>*</label> </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemprofileindividualsIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>5.Will the AI system be used to operate or control robots, drones, medical devices, or other machinery?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemoperatecontrolrobotsIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>6. Will the AI system be trained using third-party restricted or non-public personal data without proper consent? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemtrainedthirdpartyrestrictedIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>7. Will the AI system make decisions or control actions that significantly impact individuals or groups, potentially causing fear or concern?<label className={styles.recolorss}>*</label> </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemdecisionscontrolactionssignificantlyIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>8. Will the AI system interact with a large number of individuals concerning highly sensitive or confidential matters?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemdividualsconcerninghighlysensitiveIIValSecIV}</label> <br></br>

<label className={styles.labelsFonts}>9. Will the AI system play a critical role in operating essential infrastructure (e.g., energy, transportation, healthcare)?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemcriticaloperatingessentialinfrastructureIIValSecIV}</label><br></br>



<label className={styles.labelsFonts}>10. Does the use of the AI system pose an increased risk of significant negative media coverage or reputational damage for Capco or its clients?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemincreasedsignificantnegativeIIValSecIV}</label><br></br>


<label className={styles.labelsFonts}>11. Could a failure of the AI system lead to significant financial losses, legal liabilities, or damage to others?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemleadsignificantfinanciallossesIIValSecIV}</label><br></br>


<label className={styles.labelsFonts}>12. Could a failure of the AI system impact Capco's ability to comply with applicable laws or regulations in a serious way?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemimpactCapcosapplicablelawsIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>13. Does the AI component represent a significant investment or hold strategic importance for Capco?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIcomponentrepresentsignificantinvestmentIIValSecIV}</label><br></br>


<label className={styles.labelsFonts}>14. Do the characteristics of the AI system suggest that there are inherent high risks that must be considered?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemsuggestinherenthighrisksIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>15. Will the AI system be deployed in any of the following regulated sectors:</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystemdeployedSecIV}</label><br></br>

<label className={styles.labelsFonts}>16. Regardless of any other responses above, does the AI system pose any significant risk of harm to individuals' health, safety, or fundamental rights.</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISharepointSecV}</label> <br></br>

<div id="divbutton">  
        <PrimaryButton text="Request for SecIII" onClick={this.OnRequestSubmit.bind(this)} styles={stackButtonStyles}  
        className={styles.Mybutton} />
    </div><br></br><br></br>



</Stack>

}

{this.state.ShowLastSubmit==true &&  myitemId!="" &&

<Stack>
<label>17</label>

<label className={styles.labelsFonts}>1. Project System Name </label><br></br>
<label className={styles.labelsFonts}>{this.state.ProjSystemName}</label><br></br>
<label className={styles.labelsFonts}>2. Project Classification <label className={styles.recolorss}>*</label> </label><br></br>
<Dropdown className={styles.onlyFont}
                  placeholder="Select Project Classification"
                  options={this.state.ProjectClassListItemsSecIII} 
                  styles={dropdownStyles}
                  selectedKey={this.state.MyProjectClassVal ? this.state.MyProjectClassVal : undefined} 
                  onChange={this.handleChangeProjClassValueSecIII.bind(this)}/><br></br>


<label className={styles.labelsFonts}>3. What is the purpose and key concept(s) of the project/system? </label><br></br>
<label className={styles.labelsFonts}>{this.state.Purpose}</label><br></br>
<b><label className={styles.labelsFonts}>4. Bussiness Owner</label></b><br/>
<label className={styles.labelsFonts}>{this.state.BussinessOwnerName == null ? 'N/A' : this.state.BussinessOwnerName}</label><br/><br/>
<b><label className={styles.labelsFonts}>5. Technical Owner</label></b><br/>
<label className={styles.labelsFonts}>{this.state.TechnicalOwnerName == null ? 'N/A' : this.state.TechnicalOwnerName}</label><br/><br/>
<b><label className={styles.labelsFonts}>6. Geography</label></b><br></br>
<label className={styles.labelsFonts}>{this.state.MyGeographyVal}</label><br/>
<b><label className={styles.labelsFonts}>7. Capco Domain </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.MyCapcoDomainVal}</label><br/>
<b><label className={styles.labelsFonts}>8.Client/Audience </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.Client}</label><br/>
<b><label className={styles.labelsFonts}>9. Sales App Opportunity ID </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.SalesId}</label><br/>
<b><label className={styles.labelsFonts}>10. Project Stage </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.MyProjectStage}</label><br/>

<b><label className={styles.labelsFonts}>11. Scope of project/system  </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.ScopeofProject}</label><br/>

<b><label className={styles.labelsFonts}>12. Not in scope of project/system </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.NotScopeofProject}</label><br/>

<b><label className={styles.labelsFonts}>13. Evidence of research </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.Evidenceofresearch}</label><br></br>

 
{/* //SecII Values */}

<b><label className={styles.test}>Data and Business Use Case Risk Level of AI Project/System </label></b><br></br>
<b><label className={styles.test}>Personal & Company Data </label></b><br></br>

<label className={styles.labelsFonts}>1. Will the AI system capture, store or process personal data? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISytemCaptureSectionIIVal}</label><br/>


<label className={styles.labelsFonts}>2. Will the AI system be augmented with Capco or client data? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystemArgumenStectionIIVal}</label><br/>


<label className={styles.labelsFonts}> Please describe what and how </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyDescribewhatandhow}</label> <br></br>

<b><label className={styles.test}>Prohibited AI </label></b><br></br><br></br>

<label className={styles.labelsFonts}>3. Does the AI system rely on the untargeted collection of facial images from the internet or CCTV footage to build facial recognition databases? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemCCTVfootageSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>4. Does the AI system rely on subliminal, purposefully manipulative, or deceptive techniques to influence individuals' behavior? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemrelySectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>5. Does the AI system analyze or infer emotions of individuals within the workplace or educational institutions?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISysteminferemotionsSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>6. Does the AI system use biometric data to deduce or infer race, political opinions, trade union membership, religious or philosophical beliefs, sex life, or sexual orientation? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystembiometricSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>7. Does the AI system make risk assessments of individuals to identify or predict the risk that they will commit a criminal offense?  </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemriskassessmentsSectionIIVal}</label><br></br>
       
<label className={styles.labelsFonts}>8. Is the AI system involved in social scoring of individuals, potentially leading to detrimental or unfavorable treatment based on their behavior, characteristics, or personal circumstances?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystemSocialScoringsSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>9. Does the AI system engage in mass surveillance of individuals in public or private spaces without their explicit consent? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystemSocialScoringsSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>10. Does the AI system make significant legal or similar decisions (e.g., in employment, healthcare, education) without human review or possibility for appeal?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemleagalSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>11.Is the AI system designed to influence or manipulate political campaigns, voting behavior, or other democratic processes?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsysteminfluenceSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>12. Does the AI system make criminal risk assessments or predictions about individuals based on profiling or other biometric data?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemcriminalSectionIIVal}</label> <br></br>


<label className={styles.labelsFonts}>13. Does the AI system use real-time biometric identification in publicly accessible spaces for law enforcement purposes?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystembiometricSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>14. Does the AI system exploit vulnerabilities of individuals based on factors such as age, disability, or socio-economic status to influence their behavior? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemexploitSectionIIVal}</label> <br></br>


<b><label className={styles.test}>High Risk AI </label></b><br></br>

<label className={styles.labelsFonts}>1. Will the AI system be used to assess whether an individual is eligible to receive medical treatment or influence health outcomes?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemindividualiseligibleIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>2. Will the AI system be used to determine access to education, evaluate progress, or detect cheating in academic or training settings? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemeducationevaluateprogressIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>3. Will the AI system be used to assess eligibility for employment,promotions,loans,or housing?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemassesseligibilityemploymentIIValSecIV}</label> <br></br>

<label className={styles.labelsFonts}>4. Will the AI system be used to profile individuals or assess their risk of committing a crime?<label className={styles.recolorss}>*</label> </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemprofileindividualsIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>5.Will the AI system be used to operate or control robots, drones, medical devices, or other machinery?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemoperatecontrolrobotsIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>6. Will the AI system be trained using third-party restricted or non-public personal data without proper consent? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemtrainedthirdpartyrestrictedIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>7. Will the AI system make decisions or control actions that significantly impact individuals or groups, potentially causing fear or concern?<label className={styles.recolorss}>*</label> </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemdecisionscontrolactionssignificantlyIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>8. Will the AI system interact with a large number of individuals concerning highly sensitive or confidential matters?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemdividualsconcerninghighlysensitiveIIValSecIV}</label> <br></br>

<label className={styles.labelsFonts}>9. Will the AI system play a critical role in operating essential infrastructure (e.g., energy, transportation, healthcare)?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemcriticaloperatingessentialinfrastructureIIValSecIV}</label><br></br>



<label className={styles.labelsFonts}>10. Does the use of the AI system pose an increased risk of significant negative media coverage or reputational damage for Capco or its clients?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemincreasedsignificantnegativeIIValSecIV}</label><br></br>


<label className={styles.labelsFonts}>11. Could a failure of the AI system lead to significant financial losses, legal liabilities, or damage to others?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemleadsignificantfinanciallossesIIValSecIV}</label><br></br>


<label className={styles.labelsFonts}>12. Could a failure of the AI system impact Capco's ability to comply with applicable laws or regulations in a serious way?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemimpactCapcosapplicablelawsIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>13. Does the AI component represent a significant investment or hold strategic importance for Capco?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIcomponentrepresentsignificantinvestmentIIValSecIV}</label><br></br>


<label className={styles.labelsFonts}>14. Do the characteristics of the AI system suggest that there are inherent high risks that must be considered?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemsuggestinherenthighrisksIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>15. Will the AI system be deployed in any of the following regulated sectors:</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystemdeployedSecIV}</label><br></br>

<label className={styles.labelsFonts}>16. Regardless of any other responses above, does the AI system pose any significant risk of harm to individuals' health, safety, or fundamental rights.</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISharepointSecV}</label> <br></br>



</Stack>

}

{this.state.ShowCompleted==true &&  myitemId!="" &&

<Stack>
<label>18</label>
<label className={styles.labelsFonts}>1. Project System Name </label><br></br>
<label className={styles.labelsFonts}>{this.state.ProjSystemName}</label><br></br>
<label className={styles.labelsFonts}>2. Project Classification </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyProjectClassifications}</label><br/>
<label className={styles.labelsFonts}>3. What is the purpose and key concept(s) of the project/system? </label><br></br>
<label className={styles.labelsFonts}>{this.state.Purpose}</label><br></br>
<b><label className={styles.labelsFonts}>4. Bussiness Owner</label></b><br/>
<label className={styles.labelsFonts}>{this.state.BussinessOwnerName == null ? 'N/A' : this.state.BussinessOwnerName}</label><br/><br/>
<b><label className={styles.labelsFonts}>5. Technical Owner</label></b><br/>
<label className={styles.labelsFonts}>{this.state.TechnicalOwnerName == null ? 'N/A' : this.state.TechnicalOwnerName}</label><br/><br/>
<b><label className={styles.labelsFonts}>6. Geography</label></b><br></br>
<label className={styles.labelsFonts}>{this.state.MyGeographyVal}</label><br/>
<b><label className={styles.labelsFonts}>7. Capco Domain </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.MyCapcoDomainVal}</label><br/>
<b><label className={styles.labelsFonts}>8.Client/Audience </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.Client}</label><br/>
<b><label className={styles.labelsFonts}>9. Sales App Opportunity ID </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.SalesId}</label><br/>
<b><label className={styles.labelsFonts}>10. Project Stage </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.MyProjectStage}</label><br/>

<b><label className={styles.labelsFonts}>11. Scope of project/system  </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.ScopeofProject}</label><br/>

<b><label className={styles.labelsFonts}>12. Not in scope of project/system </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.NotScopeofProject}</label><br/>

<b><label className={styles.labelsFonts}>13. Evidence of research </label></b><br></br>
<label className={styles.labelsFonts}>{this.state.Evidenceofresearch}</label><br></br>

 
{/* //SecII Values */}

<b><label className={styles.test}>Data and Business Use Case Risk Level of AI Project/System </label></b><br></br>
<b><label className={styles.test}>Personal & Company Data </label></b><br></br>

<label className={styles.labelsFonts}>1. Will the AI system capture, store or process personal data? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISytemCaptureSectionIIVal}</label><br/>


<label className={styles.labelsFonts}>2. Will the AI system be augmented with Capco or client data? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystemArgumenStectionIIVal}</label><br/>


<label className={styles.labelsFonts}> Please describe what and how </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyDescribewhatandhow}</label> <br></br>

<b><label className={styles.test}>Prohibited AI </label></b><br></br><br></br>

<label className={styles.labelsFonts}>3. Does the AI system rely on the untargeted collection of facial images from the internet or CCTV footage to build facial recognition databases? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemCCTVfootageSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>4. Does the AI system rely on subliminal, purposefully manipulative, or deceptive techniques to influence individuals' behavior? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemrelySectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>5. Does the AI system analyze or infer emotions of individuals within the workplace or educational institutions?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISysteminferemotionsSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>6. Does the AI system use biometric data to deduce or infer race, political opinions, trade union membership, religious or philosophical beliefs, sex life, or sexual orientation? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystembiometricSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>7. Does the AI system make risk assessments of individuals to identify or predict the risk that they will commit a criminal offense?  </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemriskassessmentsSectionIIVal}</label><br></br>
       
<label className={styles.labelsFonts}>8. Is the AI system involved in social scoring of individuals, potentially leading to detrimental or unfavorable treatment based on their behavior, characteristics, or personal circumstances?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystemSocialScoringsSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>9. Does the AI system engage in mass surveillance of individuals in public or private spaces without their explicit consent? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystemSocialScoringsSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>10. Does the AI system make significant legal or similar decisions (e.g., in employment, healthcare, education) without human review or possibility for appeal?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemleagalSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>11.Is the AI system designed to influence or manipulate political campaigns, voting behavior, or other democratic processes?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsysteminfluenceSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>12. Does the AI system make criminal risk assessments or predictions about individuals based on profiling or other biometric data?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemcriminalSectionIIVal}</label> <br></br>


<label className={styles.labelsFonts}>13. Does the AI system use real-time biometric identification in publicly accessible spaces for law enforcement purposes?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystembiometricSectionIIVal}</label><br></br>

<label className={styles.labelsFonts}>14. Does the AI system exploit vulnerabilities of individuals based on factors such as age, disability, or socio-economic status to influence their behavior? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemexploitSectionIIVal}</label> <br></br>


<b><label className={styles.test}>High Risk AI </label></b><br></br>

<label className={styles.labelsFonts}>1. Will the AI system be used to assess whether an individual is eligible to receive medical treatment or influence health outcomes?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemindividualiseligibleIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>2. Will the AI system be used to determine access to education, evaluate progress, or detect cheating in academic or training settings? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemeducationevaluateprogressIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>3. Will the AI system be used to assess eligibility for employment,promotions,loans,or housing?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemassesseligibilityemploymentIIValSecIV}</label> <br></br>

<label className={styles.labelsFonts}>4. Will the AI system be used to profile individuals or assess their risk of committing a crime?<label className={styles.recolorss}>*</label> </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemprofileindividualsIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>5.Will the AI system be used to operate or control robots, drones, medical devices, or other machinery?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemoperatecontrolrobotsIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>6. Will the AI system be trained using third-party restricted or non-public personal data without proper consent? </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemtrainedthirdpartyrestrictedIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>7. Will the AI system make decisions or control actions that significantly impact individuals or groups, potentially causing fear or concern?<label className={styles.recolorss}>*</label> </label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemdecisionscontrolactionssignificantlyIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>8. Will the AI system interact with a large number of individuals concerning highly sensitive or confidential matters?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemdividualsconcerninghighlysensitiveIIValSecIV}</label> <br></br>

<label className={styles.labelsFonts}>9. Will the AI system play a critical role in operating essential infrastructure (e.g., energy, transportation, healthcare)?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemcriticaloperatingessentialinfrastructureIIValSecIV}</label><br></br>



<label className={styles.labelsFonts}>10. Does the use of the AI system pose an increased risk of significant negative media coverage or reputational damage for Capco or its clients?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemincreasedsignificantnegativeIIValSecIV}</label><br></br>


<label className={styles.labelsFonts}>11. Could a failure of the AI system lead to significant financial losses, legal liabilities, or damage to others?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemleadsignificantfinanciallossesIIValSecIV}</label><br></br>


<label className={styles.labelsFonts}>12. Could a failure of the AI system impact Capco's ability to comply with applicable laws or regulations in a serious way?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemimpactCapcosapplicablelawsIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>13. Does the AI component represent a significant investment or hold strategic importance for Capco?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIcomponentrepresentsignificantinvestmentIIValSecIV}</label><br></br>


<label className={styles.labelsFonts}>14. Do the characteristics of the AI system suggest that there are inherent high risks that must be considered?</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAIsystemsuggestinherenthighrisksIIValSecIV}</label><br></br>

<label className={styles.labelsFonts}>15. Will the AI system be deployed in any of the following regulated sectors:</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISystemdeployedSecIV}</label><br></br>

<label className={styles.labelsFonts}>16. Regardless of any other responses above, does the AI system pose any significant risk of harm to individuals' health, safety, or fundamental rights.</label><br></br>
<label className={styles.labelsFonts}>{this.state.MyAISharepointSecV}</label> <br></br>

<b><label className={styles.test}>Business Requirements, Architecture, and Design </label></b><br></br><br></br>

<label className={styles.labelsFonts}>1. Does the AI system use Generative AI or LLMs?</label><br></br>
<label>{this.state.MyAIsystemGenerativeSecV}</label><br></br>

<label className={styles.labelsFonts}>2. Provide links to AI project/system Business Use Case and Requirements Specification documentation?  </label><br></br>
<label>{this.state.MyBusinessUseCaseSecV}</label><br></br>

<label className={styles.labelsFonts}>3. Provide links to AI project/system Architecture and Design Specification documentation?  </label><br></br>
<label>{this.state.MyAIprojectArchitecureCaseSecV}</label><br></br>

<label className={styles.labelsFonts}>4. Provide links to Sharepoint, Teams or other additional sources of project documentation?</label><br></br>
<label>{this.state.MySharepointCaseSecV}</label>  


</Stack>

}


</Stack>
</Stack>

 );

 
    }


  }
  