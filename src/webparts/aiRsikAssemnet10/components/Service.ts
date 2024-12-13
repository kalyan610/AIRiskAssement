import { sp } from "@pnp/sp/presets/all";
import "@pnp/sp/webs";
import "@pnp/sp/folders";
import "@pnp/sp/lists";
import "@pnp/sp/views";
import "@pnp/sp/items";
import "@pnp/sp/site-users/web";
import "@pnp/sp/fields";
import "@pnp/sp/attachments";
import "@pnp/sp/files";


export default class Service {

    public mysitecontext: any;

    public constructor(siteUrl: string, Sitecontext: any) {
        this.mysitecontext = Sitecontext;
     
        console.log(this.UpdateSectionII);
        console.log(this.UpdateSectionIII);
        console.log(this.Approve);
        console.log(this.Reject);
        console.log(this.Approve1);
        console.log(this.Reject1);
        console.log(this.OnRequestSubmit);
        sp.setup({
            sp: {
                baseUrl: siteUrl

            },
        });

    }

    

    public async GetAllProjClasstypes():Promise<any>
   {

    return await sp.web.lists.getByTitle("ProjectClassification").items.select('Title','ID').expand().get().then(function (data:any) {

    return data;


    });


   }

   public async GetAllProjClasstypesSecII():Promise<any>
   {

    return await sp.web.lists.getByTitle("ProjectClassificationSecII").items.select('Title','ID').expand().get().then(function (data:any) {

    return data;


    });


   }

   public async GetAllProjClasstypesSecIII():Promise<any>
   {

    return await sp.web.lists.getByTitle("ProjectClassificationSecIII").items.select('Title','ID').expand().get().then(function (data:any) {

    return data;


    });


   }


   public async GetAllgeographytypes():Promise<any>
   {

    return await sp.web.lists.getByTitle("Geography").items.select('Title','ID').expand().get().then(function (data:any) {

    return data;


    });


   }

   public async GetAllCapcoDomaintypes():Promise<any>
   {

    return await sp.web.lists.getByTitle("CapcoDomain").items.select('Title','ID').expand().get().then(function (data:any) {

    return data;


    });


   }

   public async GetAllProjStages():Promise<any>
   {

    return await sp.web.lists.getByTitle("ProjectStages").items.select('Title','ID').expand().get().then(function (data:any) {

    return data;


    });


   }

   public async getCurrentUserSiteGroups(): Promise<any[]> {

    try {

        return (await sp.web.currentUser.groups.select("Id,Title,Description,OwnerTitle,OnlyAllowMembersViewMembership,AllowMembersEditMembership,Owner/Id,Owner/LoginName").expand('Owner').get());

    }
    catch {
        throw 'get current user site groups failed.';
    }

}


public async getCurrentUserEmail():Promise<any> {

    return sp.web.currentUser.get().then((user) => {
        console.log(user);
        return user;
    });

}

   public async getUserByLogin(LoginName:string):Promise<any>{
    try{
        const user = await sp.web.siteUsers.getByLoginName(LoginName).get();
        return user;
    }catch(error){
        console.log(error);
    }
}

public async getUserByEmail(LoginName:string):Promise<any>{
    try{
        const user = await sp.web.siteUsers.getByEmail(LoginName).get();
        return user;
    }catch(error){
        console.log(error);
    }
}


public async GetAllOptionsRequried():Promise<any>
{

 return await sp.web.lists.getByTitle("Options").items.select('Title','ID').expand().get().then(function (data:any) {

 return data;


 });


}

public async Save (

    MyProjectSystemName:string, 
    MyProjectClassificationVal:string,
    MyPurpose:string,
    MyBussinessowner:[],
    MyTechnicalOwner:[],
    MyGeographyVal:string,
    //MyListgoes:string,
    MyCapcoDomainVal:string,
    MyClientName:string,
    MySalesAppOpportunityID:string,
    MyProjectStageVal:string,
    MyScope:string,
    MyNotScope:string,
    MyEvidence:string,
    MyProjectClassifications:string,
    MyBussOwner:string,
    MyTechOwner:string
   )

{

    let Myval='Completed';
    
    try
    {

    let VarMyArra={"results":MyBussinessowner};
    let VarMyArra1={"results":MyTechnicalOwner};
    

    
     let Varmyval= await sp.web.lists.getByTitle("Project Assessment").items.add({

    ProjectSystemName:MyProjectSystemName,
    ProjectClassificationId:MyProjectClassificationVal,
    Whatisthepurposeandkeyconcept_x0:MyPurpose,
    BusinessOwnerId:VarMyArra,
    TechnicalOwnerId:VarMyArra1,
    GeographyId:MyGeographyVal,
    //PleaseListGeos:MyListgoes,
    CapcoDomainId:MyCapcoDomainVal,
    Client:MyClientName,
    SalesAppOpportunityID:MySalesAppOpportunityID,
    ProjectStageId:MyProjectStageVal,
    Scopeofproject_x002f_system:MyScope,
    Notinscopeofproject_x002f_system:MyNotScope,
    Evidenceofresearch:MyEvidence,
    Project_x0020_Classifications:MyProjectClassifications,
    BusinessOwners:MyBussOwner,
    TechnicalOwners:MyTechOwner,
    Title:"Record Saved",
    SubmissionStatus:"SecI",
    Status :"Open",
    LocalLabStatus:"",
    GlobalGenAIForumStatus:""
    
    

   }).then (async r => {
    

  return Myval;

  })

  return Varmyval;

  
}



catch (error) {
  console.log(error);
}

}

public async SaveSectionII (

    MyProjectSystemName:string, 
    MyProjectClassificationVal:string,
    MyPurpose:string,
    MyBussinessowner:[],
    MyTechnicalOwner:[],
    MyGeographyVal:string,
    //MyListgoes:string,
    MyCapcoDomainVal:string,
    MyClientName:string,
    MySalesAppOpportunityID:string,
    MyProjectStageVal:string,
    MyScope:string,
    MyNotScope:string,
    MyEvidence:string,
    MyProjectClassifications:string,
    MyBussOwner:string,
    MyTechOwner:string,

    MyWilltheAIsystemcaptureSecII:string,
    MyWilltheAIsystembeaugmentedwithCaSecII:string,
    MyDoestheAIsystemrelyontheuntargetCaseII:string,
    MyDoestheAIsystemrelyonsubliminalCaseII:string,
    MyDoestheAIsystemanalyzeorinferemoCaseII:string,

    MyDoestheAIsystemusebiometricdatatCaseII:string,
    MyDoestheAIsystemmakeriskassessmenCaseII:string,
    MyIstheAIsysteminvolvedinsocialscoCaseII:string,
    MyDoestheAIsystemengageinmasssurveCaseII:string,
    MyDoestheAIsystemmakesignificantleCaseII:string,

    MyIstheAIsystemdesignedtoinfluenceCaseII:string,
    MyDoestheAIsystemmakecriminalriskaCaseII:string,
    MyDoestheAIsystemuserealx002dtimCaseII:string,
    MyDoestheAIsystemexploitvulnerabilCaseII:string,
    MyWilltheAIsystembeusedtoassesswheCaseII:string,
    MyWilltheAIsystembeusedtodetermineCaseII:string,
    MyWilltheAIsystembeusedtoassesseliCaseII:string,
    MyWilltheAIsystembeusedtoprofileinCaseII:string,
    MyWilltheAIsystembeusedtooperateorCaseII:string,
    MyWilltheAIsystembetrainedusingthiCaseII:string,
    MyWilltheAIsystemmakedecisionsorcoCaseII:string,
    MyWilltheAIsysteminteractwithalargCaseII:string,
    MyWilltheAIsystemplayacriticalroleCaseII:string,
    MyDoestheuseoftheAIsystemposeanincCaseII:string,



    MyCouldafailureoftheAIsystemleadtoCaseII:string,
    MyCouldafailureoftheAIsystemimpactCaseII:string,
    MyDoestheAIcomponentrepresentasignCaseII:string,

//last
    MyDothecharacteristicsoftheAIsysteCaseII:string,
    MyWilltheAIsystembedeployedinanyofCaseII:string,
    MyInspiteofotherresponsesintheHighCaseII:string,
    MyArumentSecIItxt:string,


    //end
    
  
   )

{

    let Myval='Completed';
    let VarMyArra={"results":MyBussinessowner};
    let VarMyArra1={"results":MyTechnicalOwner};
    let MySubmissionStatus="";
    let MyAssementStatus='';
    

    if(MyDoestheAIsystemrelyontheuntargetCaseII=="Yes"|| MyDoestheAIsystemrelyonsubliminalCaseII=="Yes"|| MyDoestheAIsystemanalyzeorinferemoCaseII=="Yes" ||
      MyDoestheAIsystemusebiometricdatatCaseII=="Yes" || MyDoestheAIsystemmakeriskassessmenCaseII=="Yes" || MyIstheAIsysteminvolvedinsocialscoCaseII=="Yes" ||
      MyDoestheAIsystemengageinmasssurveCaseII=="Yes" || MyDoestheAIsystemmakesignificantleCaseII=="Yes" ||  MyIstheAIsystemdesignedtoinfluenceCaseII=="Yes" ||
      MyDoestheAIsystemmakecriminalriskaCaseII=="Yes" || MyDoestheAIsystemuserealx002dtimCaseII=="Yes" || MyDoestheAIsystemexploitvulnerabilCaseII=="Yes"
    
    )

    {

        MySubmissionStatus="Closed";
        MyAssementStatus="Closed";
        

    }

   
    else
    {

        MySubmissionStatus="Request";
        MyAssementStatus="Open"
        

    }
    
    
    try
    {

    
     let Varmyval= await sp.web.lists.getByTitle("Project Assessment").items.add({
//sec1

    ProjectSystemName:MyProjectSystemName,
    ProjectClassificationId:MyProjectClassificationVal,
    Whatisthepurposeandkeyconcept_x0:MyPurpose,
    BusinessOwnerId:VarMyArra,
    TechnicalOwnerId:VarMyArra1,
    GeographyId:MyGeographyVal,
    //PleaseListGeos:MyListgoes,
    CapcoDomainId:MyCapcoDomainVal,
    Client:MyClientName,
    SalesAppOpportunityID:MySalesAppOpportunityID,
    ProjectStageId:MyProjectStageVal,
    Scopeofproject_x002f_system:MyScope,
    Notinscopeofproject_x002f_system:MyNotScope,
    Evidenceofresearch:MyEvidence,
    Project_x0020_Classifications:MyProjectClassifications,
    BusinessOwners:MyBussOwner,
    TechnicalOwners:MyTechOwner,


//end


    WilltheAIsystemcapture_x002c_sto:MyWilltheAIsystemcaptureSecII,
    WilltheAIsystembeaugmentedwithCa:MyWilltheAIsystembeaugmentedwithCaSecII,

   
    //Prohibet AI

    DoestheAIsystemrelyontheuntarget:MyDoestheAIsystemrelyontheuntargetCaseII,
    DoestheAIsystemrelyonsubliminal_:MyDoestheAIsystemrelyonsubliminalCaseII,
    DoestheAIsystemanalyzeorinferemo:MyDoestheAIsystemanalyzeorinferemoCaseII,
    
    DoestheAIsystemusebiometricdatat:MyDoestheAIsystemusebiometricdatatCaseII,
    DoestheAIsystemmakeriskassessmen:MyDoestheAIsystemmakeriskassessmenCaseII,
    IstheAIsysteminvolvedinsocialsco:MyIstheAIsysteminvolvedinsocialscoCaseII,
    DoestheAIsystemengageinmasssurve:MyDoestheAIsystemengageinmasssurveCaseII,
    DoestheAIsystemmakesignificantle:MyDoestheAIsystemmakesignificantleCaseII,

    IstheAIsystemdesignedtoinfluence:MyIstheAIsystemdesignedtoinfluenceCaseII,
    DoestheAIsystemmakecriminalriska:MyDoestheAIsystemmakecriminalriskaCaseII,
    DoestheAIsystemusereal_x002d_tim:MyDoestheAIsystemuserealx002dtimCaseII,
    DoestheAIsystemexploitvulnerabil:MyDoestheAIsystemexploitvulnerabilCaseII,
    //END

    //HIGHRISK AI

    WilltheAIsystembeusedtoassesswhe:MyWilltheAIsystembeusedtoassesswheCaseII,
    WilltheAIsystembeusedtodetermine:MyWilltheAIsystembeusedtodetermineCaseII,
    WilltheAIsystembeusedtoassesseli:MyWilltheAIsystembeusedtoassesseliCaseII,
    WilltheAIsystembeusedtoprofilein:MyWilltheAIsystembeusedtoprofileinCaseII,
    WilltheAIsystembeusedtooperateor:MyWilltheAIsystembeusedtooperateorCaseII,

    WilltheAIsystembetrainedusingthi:MyWilltheAIsystembetrainedusingthiCaseII,
    WilltheAIsystemmakedecisionsorco:MyWilltheAIsystemmakedecisionsorcoCaseII,
    WilltheAIsysteminteractwithalarg:MyWilltheAIsysteminteractwithalargCaseII,
    WilltheAIsystemplayacriticalrole:MyWilltheAIsystemplayacriticalroleCaseII,
    DoestheuseoftheAIsystemposeaninc:MyDoestheuseoftheAIsystemposeanincCaseII,

    CouldafailureoftheAIsystemleadto:MyCouldafailureoftheAIsystemleadtoCaseII,
    CouldafailureoftheAIsystemimpact:MyCouldafailureoftheAIsystemimpactCaseII,
    DoestheAIcomponentrepresentasign:MyDoestheAIcomponentrepresentasignCaseII,

    //Last

    DothecharacteristicsoftheAIsyste:MyDothecharacteristicsoftheAIsysteCaseII,
    WTest:MyWilltheAIsystembedeployedinanyofCaseII,
    InspiteofotherresponsesintheHigh:MyInspiteofotherresponsesintheHighCaseII,
    PleaseDescribeWhatandHow:MyArumentSecIItxt,


    //END
    
    
    Title:"Record Saved SecII",
    SubmissionStatus:MySubmissionStatus,
    Status :MyAssementStatus,
    LocalLabStatus:"",
    GlobalGenAIForumStatus:""
    
    
    

   }).then (async r => {
    

  return Myval;

  })

  return Varmyval;

  
}



catch (error) {
  console.log(error);
}

}

private  async UpdateSectionII(MyRecordId:number,

    MyWilltheAIsystemcaptureSecII:string,
    MyWilltheAIsystembeaugmentedwithCaSecII:string,
    MyDoestheAIsystemrelyontheuntargetCaseII:string,
    MyDoestheAIsystemrelyonsubliminalCaseII:string,
    MyDoestheAIsystemanalyzeorinferemoCaseII:string,

    MyDoestheAIsystemusebiometricdatatCaseII:string,
    MyDoestheAIsystemmakeriskassessmenCaseII:string,
    MyIstheAIsysteminvolvedinsocialscoCaseII:string,
    MyDoestheAIsystemengageinmasssurveCaseII:string,
    MyDoestheAIsystemmakesignificantleCaseII:string,

    MyIstheAIsystemdesignedtoinfluenceCaseII:string,
    MyDoestheAIsystemmakecriminalriskaCaseII:string,
    MyDoestheAIsystemuserealx002dtimCaseII:string,
    MyDoestheAIsystemexploitvulnerabilCaseII:string,
    MyWilltheAIsystembeusedtoassesswheCaseII:string,
    MyWilltheAIsystembeusedtodetermineCaseII:string,
    MyWilltheAIsystembeusedtoassesseliCaseII:string,
    MyWilltheAIsystembeusedtoprofileinCaseII:string,
    MyWilltheAIsystembeusedtooperateorCaseII:string,
    MyWilltheAIsystembetrainedusingthiCaseII:string,
    MyWilltheAIsystemmakedecisionsorcoCaseII:string,
    MyWilltheAIsysteminteractwithalargCaseII:string,
    MyWilltheAIsystemplayacriticalroleCaseII:string,
    MyDoestheuseoftheAIsystemposeanincCaseII:string,

    MyCouldafailureoftheAIsystemleadtoCaseII:string,
    MyCouldafailureoftheAIsystemimpactCaseII:string,
    MyDoestheAIcomponentrepresentasignCaseII:string,

//last
    MyDothecharacteristicsoftheAIsysteCaseII:string,
    MyWilltheAIsystembedeployedinanyofCaseII:string,
    MyInspiteofotherresponsesintheHighCaseII:string,
    MyArumentSecIItxt:string,
    MyProjectClassifications:string
)
      
{       
                
        let Myval='Completed';

        let MyListTitle='Project Assessment';

        let MySubmissionStatus="";

        let MyAssementStatus="";

        

    if(MyDoestheAIsystemrelyontheuntargetCaseII=="Yes"|| MyDoestheAIsystemrelyonsubliminalCaseII=="Yes"|| MyDoestheAIsystemanalyzeorinferemoCaseII=="Yes" ||
      MyDoestheAIsystemusebiometricdatatCaseII=="Yes" || MyDoestheAIsystemmakeriskassessmenCaseII=="Yes" || MyIstheAIsysteminvolvedinsocialscoCaseII=="Yes" ||
      MyDoestheAIsystemengageinmasssurveCaseII=="Yes" || MyDoestheAIsystemmakesignificantleCaseII=="Yes" ||  MyIstheAIsystemdesignedtoinfluenceCaseII=="Yes" ||
      MyDoestheAIsystemmakecriminalriskaCaseII=="Yes" || MyDoestheAIsystemuserealx002dtimCaseII=="Yes" || MyDoestheAIsystemexploitvulnerabilCaseII=="Yes"
    
    )

    {

        MySubmissionStatus="Closed";
        MyAssementStatus="Closed";
       

    }

   

    else
    {

        MySubmissionStatus="Request";
        MyAssementStatus="Open";
        

    }

        


        try
        {

        let list = sp.web.lists.getByTitle(MyListTitle);
        let Varmyval = await list.items.getById(MyRecordId).update({

        //Emp Update

         WilltheAIsystemcapture_x002c_sto:MyWilltheAIsystemcaptureSecII,
    WilltheAIsystembeaugmentedwithCa:MyWilltheAIsystembeaugmentedwithCaSecII,

   
    //Prohibet AI

    DoestheAIsystemrelyontheuntarget:MyDoestheAIsystemrelyontheuntargetCaseII,
    DoestheAIsystemrelyonsubliminal_:MyDoestheAIsystemrelyonsubliminalCaseII,
    DoestheAIsystemanalyzeorinferemo:MyDoestheAIsystemanalyzeorinferemoCaseII,
    
    DoestheAIsystemusebiometricdatat:MyDoestheAIsystemusebiometricdatatCaseII,
    DoestheAIsystemmakeriskassessmen:MyDoestheAIsystemmakeriskassessmenCaseII,
    IstheAIsysteminvolvedinsocialsco:MyIstheAIsysteminvolvedinsocialscoCaseII,
    DoestheAIsystemengageinmasssurve:MyDoestheAIsystemengageinmasssurveCaseII,
    DoestheAIsystemmakesignificantle:MyDoestheAIsystemmakesignificantleCaseII,

    IstheAIsystemdesignedtoinfluence:MyIstheAIsystemdesignedtoinfluenceCaseII,
    DoestheAIsystemmakecriminalriska:MyDoestheAIsystemmakecriminalriskaCaseII,
    DoestheAIsystemusereal_x002d_tim:MyDoestheAIsystemuserealx002dtimCaseII,
    DoestheAIsystemexploitvulnerabil:MyDoestheAIsystemexploitvulnerabilCaseII,
    //END

    //HIGHRISK AI

    WilltheAIsystembeusedtoassesswhe:MyWilltheAIsystembeusedtoassesswheCaseII,
    WilltheAIsystembeusedtodetermine:MyWilltheAIsystembeusedtodetermineCaseII,
    WilltheAIsystembeusedtoassesseli:MyWilltheAIsystembeusedtoassesseliCaseII,
    WilltheAIsystembeusedtoprofilein:MyWilltheAIsystembeusedtoprofileinCaseII,
    WilltheAIsystembeusedtooperateor:MyWilltheAIsystembeusedtooperateorCaseII,

    WilltheAIsystembetrainedusingthi:MyWilltheAIsystembetrainedusingthiCaseII,
    WilltheAIsystemmakedecisionsorco:MyWilltheAIsystemmakedecisionsorcoCaseII,
    WilltheAIsysteminteractwithalarg:MyWilltheAIsysteminteractwithalargCaseII,
    WilltheAIsystemplayacriticalrole:MyWilltheAIsystemplayacriticalroleCaseII,
    DoestheuseoftheAIsystemposeaninc:MyDoestheuseoftheAIsystemposeanincCaseII,

    CouldafailureoftheAIsystemleadto:MyCouldafailureoftheAIsystemleadtoCaseII,
    CouldafailureoftheAIsystemimpact:MyCouldafailureoftheAIsystemimpactCaseII,
    DoestheAIcomponentrepresentasign:MyDoestheAIcomponentrepresentasignCaseII,

    //Last

    DothecharacteristicsoftheAIsyste:MyDothecharacteristicsoftheAIsysteCaseII,
    WTest:MyWilltheAIsystembedeployedinanyofCaseII,
    InspiteofotherresponsesintheHigh:MyInspiteofotherresponsesintheHighCaseII,
    PleaseDescribeWhatandHow:MyArumentSecIItxt,
    Project_x0020_Classifications:MyProjectClassifications,

    Title:"SectionII Record Updated",
    SubmissionStatus:MySubmissionStatus,
    Status :MyAssementStatus,
    LocalLabStatus:"",
    GlobalGenAIForumStatus:""
    

        //End

        //HR Approve

       
        
    }).then (async r => {
          
        return Myval;
    
        })
    
       return Varmyval;
            
      }
    
        
      catch (error) {
        console.log(error);
      }
   

    }


    private async Approve(MyRecordId:number,MySubmissionStatus:string,LocalLabReviewer:string,MYDate:string)

    {

        let Myval='Completed';
    
        let MyListTitle='Project Assessment';

        try
            {
    
            let list = sp.web.lists.getByTitle(MyListTitle);
            let Varmyval = await list.items.getById(MyRecordId).update({

        Title:"Record Approved",
        SubmissionStatus:MySubmissionStatus,
        ApproverId:LocalLabReviewer,
        Status :"Global GenAI Forum Review",
        LocalLabStatus:"Approved",
        GlobalGenAIForumStatus:"",
        LocalLabActionedDate:MYDate
        

            }).then (async r => {
              
                return Myval;
            
                })
            
               return Varmyval;
                    
              }
            
                
              catch (error) {
                console.log(error);
              }

       
    }

    private async Reject(MyRecordId:number,MySubmissionStatus:string,LocalLabReviewer:string,MYDate:string)

    {

        let Myval='Completed';
    
        let MyListTitle='Project Assessment';

        try
            {
    
            let list = sp.web.lists.getByTitle(MyListTitle);
            let Varmyval = await list.items.getById(MyRecordId).update({

        Title:"Record Rejected",
        SubmissionStatus:MySubmissionStatus,
        ApproverId:LocalLabReviewer,
        Status :"Closed",
        LocalLabStatus:"Rejected",
        GlobalGenAIForumStatus:"",
        LocalLabActionedDate:MYDate
      

            }).then (async r => {
              
                return Myval;
            
                })
            
               return Varmyval;
                    
              }
            
                
              catch (error) {
                console.log(error);
              }

       
    }


    private async Approve1(MyRecordId:number,MySubmissionStatus:string,GlobalLabReviewer:string,MYDate:string)

    {

        let Myval='Completed';
    
        let MyListTitle='Project Assessment';

        try
            {
    
            let list = sp.web.lists.getByTitle(MyListTitle);
            let Varmyval = await list.items.getById(MyRecordId).update({

        Title:"Record Approved",
        SubmissionStatus:MySubmissionStatus,
        GlobalGenAIForumReviewerId:GlobalLabReviewer,
        Status :"Open",
        LocalLabStatus:"Approved",
        GlobalGenAIForumStatus:"Approved",
        ActionedDate:MYDate
        

            }).then (async r => {
              
                return Myval;
            
                })
            
               return Varmyval;
                    
              }
            
                
              catch (error) {
                console.log(error);
              }

       
    }

    private async Reject1(MyRecordId:number,MySubmissionStatus:string,GlobalLabReviewer:string,MYDate:string)

    {

        let Myval='Completed';
    
        let MyListTitle='Project Assessment';

        try
            {
    
            let list = sp.web.lists.getByTitle(MyListTitle);
            let Varmyval = await list.items.getById(MyRecordId).update({

        Title:"Record Rejected",
        SubmissionStatus:MySubmissionStatus,
        GlobalGenAIForumReviewerId:GlobalLabReviewer,
        Status :"Closed",
        LocalLabStatus:"Approved",
        GlobalGenAIForumStatus:"Rejected",
        ActionedDate:MYDate
      

            }).then (async r => {
              
                return Myval;
            
                })
            
               return Varmyval;
                    
              }
            
                
              catch (error) {
                console.log(error);
              }

       
    }

  

public async SaveSectionIII (

    MyProjectSystemName:string, 
    MyProjectClassificationVal:string,
    MyPurpose:string,
    MyBussinessowner:[],
    MyTechnicalOwner:[],
    MyGeographyVal:string,
    //MyListgoes:string,
    MyCapcoDomainVal:string,
    MyClientName:string,
    MySalesAppOpportunityID:string,
    MyProjectStageVal:string,
    MyScope:string,
    MyNotScope:string,
    MyEvidence:string,
    MyProjectClassifications:string,

    MyWilltheAIsystemcaptureSecII:string,
    MyWilltheAIsystembeaugmentedwithCaSecII:string,
    MyDoestheAIsystemrelyontheuntargetCaseII:string,
    MyDoestheAIsystemrelyonsubliminalCaseII:string,
    MyDoestheAIsystemanalyzeorinferemoCaseII:string,
    MyDoestheAIsystemusebiometricdatatCaseII:string,
    MyDoestheAIsystemmakeriskassessmenCaseII:string,
    MyIstheAIsysteminvolvedinsocialscoCaseII:string,
    MyDoestheAIsystemengageinmasssurveCaseII:string,
    MyDoestheAIsystemmakesignificantleCaseII:string,
    MyIstheAIsystemdesignedtoinfluenceCaseII:string,
    MyDoestheAIsystemmakecriminalriskaCaseII:string,
    MyDoestheAIsystemuserealx002dtimCaseII:string,
    MyDoestheAIsystemexploitvulnerabilCaseII:string,
    MyWilltheAIsystembeusedtoassesswheCaseII:string,
    MyWilltheAIsystembeusedtodetermineCaseII:string,
    MyWilltheAIsystembeusedtoassesseliCaseII:string,
    MyWilltheAIsystembeusedtoprofileinCaseII:string,
    MyWilltheAIsystembeusedtooperateorCaseII:string,
    MyWilltheAIsystembetrainedusingthiCaseII:string,
    MyWilltheAIsystemmakedecisionsorcoCaseII:string,
    MyWilltheAIsysteminteractwithalargCaseII:string,
    MyWilltheAIsystemplayacriticalroleCaseII:string,
    MyDoestheuseoftheAIsystemposeanincCaseII:string,
    MyCouldafailureoftheAIsystemleadtoCaseII:string,
    MyCouldafailureoftheAIsystemimpactCaseII:string,
    MyDoestheAIcomponentrepresentasignCaseII:string,
    MyDothecharacteristicsoftheAIsysteCaseII:string,
    MyWilltheAIsystembedeployedinanyofCaseII:string,
    MyInspiteofotherresponsesintheHighCaseII:string,

    //Sec III

    MyDoestheAIsystemuseGenerativeAIorCaseIII:string,
    MyProvidelinkstoAIprojectsyCaseIII:string,
    MyProvidelinkstoAIprojectsysCaseIII:string,
    MyProvidelinkstoSharepointCaseIII:string,
    MyArumentSecIItxt:string,

    //END
   
    
  
   )

{

    let Myval='Completed';
    let VarMyArra={"results":MyBussinessowner};
    let VarMyArra1={"results":MyTechnicalOwner};
    
    try
    {

    
     let Varmyval= await sp.web.lists.getByTitle("Project Assessment").items.add({

    //sec1

    ProjectSystemName:MyProjectSystemName,
    ProjectClassificationId:MyProjectClassificationVal,
    Whatisthepurposeandkeyconcept_x0:MyPurpose,
    BusinessOwnerId:VarMyArra,
    TechnicalOwnerId:VarMyArra1,
    GeographyId:MyGeographyVal,
    //PleaseListGeos:MyListgoes,
    CapcoDomainId:MyCapcoDomainVal,
    Client:MyClientName,
    SalesAppOpportunityID:MySalesAppOpportunityID,
    ProjectStageId:MyProjectStageVal,
    Scopeofproject_x002f_system:MyScope,
    Notinscopeofproject_x002f_system:MyNotScope,
    Evidenceofresearch:MyEvidence,
    Project_x0020_Classifications:MyProjectClassifications,

    WilltheAIsystemcapture_x002c_sto:MyWilltheAIsystemcaptureSecII,
    WilltheAIsystembeaugmentedwithCa:MyWilltheAIsystembeaugmentedwithCaSecII,

   //Prohbited AI

    DoestheAIsystemrelyontheuntarget:MyDoestheAIsystemrelyontheuntargetCaseII,
    DoestheAIsystemrelyonsubliminal_:MyDoestheAIsystemrelyonsubliminalCaseII,
    DoestheAIsystemanalyzeorinferemo:MyDoestheAIsystemanalyzeorinferemoCaseII,
    DoestheAIsystemusebiometricdatat:MyDoestheAIsystemusebiometricdatatCaseII,
    DoestheAIsystemmakeriskassessmen:MyDoestheAIsystemmakeriskassessmenCaseII,
    IstheAIsysteminvolvedinsocialsco:MyIstheAIsysteminvolvedinsocialscoCaseII,
    DoestheAIsystemengageinmasssurve:MyDoestheAIsystemengageinmasssurveCaseII,
    DoestheAIsystemmakesignificantle:MyDoestheAIsystemmakesignificantleCaseII,
    IstheAIsystemdesignedtoinfluence:MyIstheAIsystemdesignedtoinfluenceCaseII,
    DoestheAIsystemmakecriminalriska:MyDoestheAIsystemmakecriminalriskaCaseII,
    DoestheAIsystemusereal_x002d_tim:MyDoestheAIsystemuserealx002dtimCaseII,
    DoestheAIsystemexploitvulnerabil:MyDoestheAIsystemexploitvulnerabilCaseII,
    //END

    //HIGHRISK AI

    WilltheAIsystembeusedtoassesswhe:MyWilltheAIsystembeusedtoassesswheCaseII,
    WilltheAIsystembeusedtodetermine:MyWilltheAIsystembeusedtodetermineCaseII,
    WilltheAIsystembeusedtoassesseli:MyWilltheAIsystembeusedtoassesseliCaseII,
    WilltheAIsystembeusedtoprofilein:MyWilltheAIsystembeusedtoprofileinCaseII,
    WilltheAIsystembeusedtooperateor:MyWilltheAIsystembeusedtooperateorCaseII,
    WilltheAIsystembetrainedusingthi:MyWilltheAIsystembetrainedusingthiCaseII,
    WilltheAIsystemmakedecisionsorco:MyWilltheAIsystemmakedecisionsorcoCaseII,
    WilltheAIsysteminteractwithalarg:MyWilltheAIsysteminteractwithalargCaseII,
    WilltheAIsystemplayacriticalrole:MyWilltheAIsystemplayacriticalroleCaseII,
    DoestheuseoftheAIsystemposeaninc:MyDoestheuseoftheAIsystemposeanincCaseII,
    CouldafailureoftheAIsystemleadto:MyCouldafailureoftheAIsystemleadtoCaseII,
    CouldafailureoftheAIsystemimpact:MyCouldafailureoftheAIsystemimpactCaseII,
    DoestheAIcomponentrepresentasign:MyDoestheAIcomponentrepresentasignCaseII,
    DothecharacteristicsoftheAIsyste:MyDothecharacteristicsoftheAIsysteCaseII,
    WTest:MyWilltheAIsystembedeployedinanyofCaseII,
    InspiteofotherresponsesintheHigh:MyInspiteofotherresponsesintheHighCaseII,
    //SecIII

    DoestheAIsystemuseGenerativeAIor:MyDoestheAIsystemuseGenerativeAIorCaseIII,
    ProvidelinkstoAIproject_x002f_sy:MyProvidelinkstoAIprojectsyCaseIII,
    ProvidelinkstoAIproject_x002f_sy0:MyProvidelinkstoAIprojectsysCaseIII,
    ProvidelinkstoSharepoint_x002c_T:MyProvidelinkstoSharepointCaseIII,
    PleaseDescribeWhatandHow:MyArumentSecIItxt,

    //END

    Title:"Record Saved SecIII"
   
    
    

   }).then (async r => {
    

  return Myval;

  })

  return Varmyval;

  
}



catch (error) {
  console.log(error);
}

}


private  async UpdateSectionIII(
        
        MyRecordId:number,
        MyDoestheAIsystemuseGenerativeAIorSecIII:string,
        MyProvidelinkstoAIprojectsySecIII:string,
        MyProvidelinkstoAIprojectSecIII:string,
       MyProvidelinkstoSharepointSecIII:string,
       MyProjectClassifications:string
      
    )
          
    {       
                    
            let Myval='Completed';
    
            let MyListTitle='Project Assessment';
    
            
    
    
            try
            {
    
            let list = sp.web.lists.getByTitle(MyListTitle);
            let Varmyval = await list.items.getById(MyRecordId).update({
    
            //Emp Update
    
        DoestheAIsystemuseGenerativeAIor:MyDoestheAIsystemuseGenerativeAIorSecIII,
        ProvidelinkstoAIproject_x002f_sy:MyProvidelinkstoAIprojectsySecIII,
        ProvidelinkstoAIproject_x002f_sy0:MyProvidelinkstoAIprojectSecIII,
        ProvidelinkstoSharepoint_x002c_T:MyProvidelinkstoSharepointSecIII,
        Project_x0020_Classifications:MyProjectClassifications,

        Title:"SectionIII Record Updated",
        SubmissionStatus:"Completed",
        Status :"Completed",
        LocalLabStatus:"Approved",
        GlobalGenAIForumStatus:"Approved"
        
    
            //End
    
            //HR Approve
    
           
            
        }).then (async r => {
              
            return Myval;
        
            })
        
           return Varmyval;
                
          }
        
            
          catch (error) {
            console.log(error);
          }
       
    
        }


public async getItemByID(ItemID: any): Promise<any> {
    try {

const selectedList = 'Project Assessment';
const Item: any[] = await sp.web.lists.getByTitle(selectedList).items.select("*,BusinessOwner/EMail,TechnicalOwner/EMail,Approver/EMail,GlobalGenAIForumReviewer/EMail,Geography/Title,CapcoDomain/Title,ProjectStage/Title,ProjectClassification/Title,Author/EMail").expand("BusinessOwner,TechnicalOwner,Approver,GlobalGenAIForumReviewer,Geography,CapcoDomain,ProjectStage,ProjectClassification,Author").filter("ID eq '" + ItemID + "'").get();
        return Item[0];
    } catch (error) {
        console.log(error);
    }
}


private  async OnRequestSubmit(
        
    MyRecordId:number,
    MyStatus:string,
    MyProjectClassificationVal:string,
    MyProjectClassifications:string

  
)
      
{       
                
        let Myval='Completed';

        let MyListTitle='Project Assessment';

        
        try
        {

        let list = sp.web.lists.getByTitle(MyListTitle);
        let Varmyval = await list.items.getById(MyRecordId).update({
   
    
    Title:"Request Submitted for Approval",
    SubmissionStatus:MyStatus,
    ProjectClassificationId:MyProjectClassificationVal,
    Project_x0020_Classifications:MyProjectClassifications,
    Status :"Local Lab Review",
    LocalLabStatus:"",
    GlobalGenAIForumStatus:""

        //End

        //HR Approve

       
        
    }).then (async r => {
          
        return Myval;
    
        })
    
       return Varmyval;
            
      }
    
        
      catch (error) {
        console.log(error);
      }
   

    }



}