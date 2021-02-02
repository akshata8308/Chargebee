import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import sign from '../images/Chargebee-signature.png'
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from "@material-ui/core/Grid";
import Billing from '../images/recurring-billing-graphic.svg'
import Subscription from '../images/subscription-graphic.svg'
import operations from '../images/revenue-operations-graphic.svg'
import CheckSharpIcon from '@material-ui/icons/CheckSharp';
import revenueManagement from '../images/revenue-management.svg'
import crmLogos from "../images/crm-logos.png";
import accLogos  from "../images/acc-logos.png";
import chargebee from '../images/chargebee.png';
import pgLogos from '../images/pg-logos.png'
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LockIcon from '@material-ui/icons/Lock';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTube from '@material-ui/icons/YouTube';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  root2: {
    marginBottom: theme.spacing(20),
  },
  title: {
    marginRight: theme.spacing(2),
  },
  spacing: {
    marginLeft: theme.spacing(25),
  },
  tab1: {
    width: 1000,
  },
  tab1: {
    backgroundColor: theme.palette.background.paper,
    width: 1000,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function Landing() {

    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };

  return (
    <div className={classes.root} className="font">
    <CssBaseline/>
      <div position="static" className='appbar'>
        <Toolbar>
          <img src={sign} style={{paddingRight:'2%'}}/>
          <Typography variant="h6" className={classes.title}>
            Product
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Pricing
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Solutions
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Customer
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Resources
          </Typography>
            <div style={{flexGrow:'1'}}/>
          <Button color="inherit" style={{paddingRight:'3%'}}> <LockIcon style={{color:'green', fontSize:'medium'}}/>
           Log In</Button>
          <Button  style={{backgroundColor:'orangeRed', color:'white', padding:'0.5% 1.5%'}}>Schedule a Demo</Button>
        </Toolbar>
      </div>
      <div className={classes.root2}/>
      <div>
        <Typography variant="h6" style={{textAlign:'center',fontSize:'3rem',color:'blue',fontWeight:'bold'}}>
            Subscription Billing & Renew Operations
        </Typography>
        <Typography variant="h6" style={{textAlign:'center',fontSize:'3rem',fontWeight:'bold'}}>
            for Fast-Growth & B2B Saas
        </Typography>
        <div style={{paddingTop:'2%', textAlign:'center'}}>
            <Typography variant="h6" >
            Get the operational sophistication to achieve, sustain,
            </Typography>
            <Typography variant="h6" >
            and scale recurring revenue.
            </Typography>
        </div>
        <div className={classes.root2} style={{paddingTop:'2%', textAlign:'center'}}>
        
            <Button variant="contained" color="primary"  
            style={{ padding:'1% 1.5%', fontSize:'1.5em'}}>
            Schedule a Demo 
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="outlined" color="primary"
            style={{ padding:'1% 1.5%', fontSize:'1.5em'}}>
            sign up for free
            </Button>     
        </div>
      </div>

      <div>
      <Typography variant="h6" style={{textAlign:'center'}}>
      Thousands of Scaling SaaS Businesses Love Us
      </Typography>
      </div>

      <Grid ls={12} md={12} xs={12} sm={12} container direction="row" >
      <Grid ls={4} md={4} xs={4} sm={4}/>
      <Grid ls={4} md={4} xs={4} sm={4}>
        <marquee behavior="scroll" scrollamount="5" > <h2>𝐟𝐫𝐞𝐬𝐡𝐰𝐨𝐫𝐤 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  𝙆𝙉𝙀𝙒𝙏𝙊𝙉 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  𝙤𝙠𝙩𝙖 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ᴘᴇʀᴄᴏɴᴀ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  S͟t͟u͟d͟y͟.c͟o͟m͟ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 𝐃𝐎𝐎𝐃𝐋𝐄 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ᴇɴᴏᴠʏ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  f͟r͟e͟e͟d͟o͟m͟ </h2> </marquee>
      </Grid>
        <Grid ls={4} md={4} xs={4} sm={4}></Grid>
      </Grid>

      <div className={classes.spacing}>
      <Grid lg={12} md={12} sm={12} xs={12} container direction="row" style={{paddingTop:'5%'}}>
          <Grid item lg={6} md={6} sm={12} xs={12} >
          <Typography variant="h6" style={{color:'blue', fontSize:'small'}}>
            No more spreadsheet errors
          </Typography>
          <Typography variant="h6" style={{fontWeight:'bold', fontSize:'1.8em',padding :'1.5% 0%'}}>
            Automate Recurring Billing
          </Typography>
          <Typography variant="h6" >
            Scale your SaaS through 480+ recurring
          </Typography>
          <Typography variant="h6" >
            billing scenarios that automate who you bill,
          </Typography>
          <Typography variant="h6">
            when, and how. No humans, no
          </Typography>
          <Typography variant="h6" >
          spreadsheets, no missed payments!
          </Typography>
          <div>
          <table style={{padding:'5% 0%'}}>
          <tr> 
            <td>
              <CheckSharpIcon style={{color:'green'}}/>
            </td>
            <td>
              <Typography variant="BUTTON TEXT" style={{fontSize:'large'}}>Biiling Schedules</Typography>
            </td>
            &nbsp;&nbsp;&nbsp;
            <td>
              <CheckSharpIcon style={{color:'green'}}/>
            </td>
            <td>
              <Typography variant="h7" style={{fontSize:'large'}}>Proration & Invoicing</Typography>
            </td>
          </tr>
          <tr> 
            <td>
              <CheckSharpIcon style={{color:'green'}}/>
            </td>
            <td>
              <Typography variant="BUTTON TEXT" style={{fontSize:'large'}}>Tax management</Typography>
            </td>
            &nbsp;&nbsp;&nbsp;
            <td style={{paddingTop:'2%'}}>
              <CheckSharpIcon style={{color:'green'}}/>
            </td>
            <td>
              <Typography variant="h7" style={{fontSize:'large'}}>Payment Methods</Typography>
            </td>
          </tr>
          </table>
          <Button variant="outlined" color="primary"
            style={{ padding:'1% 1.5%', fontSize:'1em'}}>
            Learn More
          </Button>
          </div>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <img style={{textAlign:'center'}} src={Billing}/>
          </Grid>
        </Grid>

        <Grid lg={12} md={12} sm={12} xs={12} container direction="row" style={{paddingTop:'5%'}}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <img style={{textAlign:'center'}} src={Subscription}/>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Typography variant="h6" style={{color:'blue', fontSize:'small'}}>
              No more developer dependency
            </Typography>
            <Typography variant="h6" style={{fontWeight:'bold', fontSize:'1.8em', padding :'1.5% 0%'}}>
              Smarter Subscription Management
            </Typography>
            <Typography variant="h6" >
              Experiment rapidly with pricing structures,
            </Typography>
            <Typography variant="h6" >
              product catalogs, and subscription lifecycles
            </Typography>
            <Typography variant="h6" >
              with a business-user-first experience.
            </Typography>
            <div>
            <table style={{padding:'5% 0%'}}>
            <tr> 
              <td>
                <CheckSharpIcon style={{color:'green'}}/>
              </td>
              <td>
                <Typography variant="BUTTON TEXT" style={{fontSize:'large'}}>Price modeling</Typography>
              </td>
              &nbsp;&nbsp;&nbsp;
              <td>
                <CheckSharpIcon style={{color:'green'}}/>
              </td>
              <td>
                <Typography variant="h7" style={{fontSize:'large'}}>Product Catalog</Typography>
              </td>
            </tr>
            <tr> 
              <td>
                <CheckSharpIcon style={{color:'green'}}/>
              </td>
              <td>
                <Typography variant="BUTTON TEXT" style={{fontSize:'large'}}>Trial management</Typography>
              </td>
              &nbsp;&nbsp;&nbsp;
              <td style={{paddingTop:'2%'}}>
                <CheckSharpIcon style={{color:'green'}}/>
              </td>
              <td>
                <Typography variant="h7" style={{fontSize:'large'}}>Lifecycle automation</Typography>
              </td>
            </tr>
            </table>
            <Button variant="outlined" color="primary"
              style={{ padding:'1% 1.5%', fontSize:'1em'}}>
              Learn More
            </Button>
            </div>
          </Grid>
        </Grid>

        <Grid lg={12} md={12} sm={12} xs={12} container direction="row" style={{paddingTop:'5%'}}>
          <Grid item lg={6} md={6} sm={12} xs={12} >
          <Typography variant="h6" style={{color:'blue', fontSize:'small'}}>
            No more spreadsheet errors
          </Typography>
          <Typography variant="h6" style={{fontWeight:'bold', fontSize:'1.8em',padding :'1.5% 0%'}}>
            Streamline Revenue Operations
          </Typography>
          <Typography variant="h6" >
            Plug revenue leaks by aligning GTM &
          </Typography>
          <Typography variant="h6" >
            Finance. Uncover growth opportunities
          </Typography>
          <Typography variant="h6">
            across processes, geographies, and business
          </Typography>
          <Typography variant="h6" >
            models.
          </Typography>
          <div>
          <table style={{padding:'5% 0%'}}>
          <tr> 
            <td>
              <CheckSharpIcon style={{color:'green'}}/>
            </td>
            <td>
              <Typography variant="BUTTON TEXT" style={{fontSize:'large'}}>SaaS Analytics</Typography>
            </td>
            &nbsp;&nbsp;&nbsp;
            <td>
              <CheckSharpIcon style={{color:'green'}}/>
            </td>
            <td>
              <Typography variant="h7" style={{fontSize:'large'}}>Quote-to-cash</Typography>
            </td>
          </tr>
          <tr> 
            <td>
              <CheckSharpIcon style={{color:'green'}}/>
            </td>
            <td>
              <Typography variant="BUTTON TEXT" style={{fontSize:'large'}}>Order-to-revenue</Typography>
            </td>
            &nbsp;&nbsp;&nbsp;
            <td style={{paddingTop:'2%'}}>
              <CheckSharpIcon style={{color:'green'}}/>
            </td>
            <td>
              <Typography variant="h7" style={{fontSize:'large'}}>Revenue Recognition</Typography>
            </td>
          </tr>
          </table>
          <Button variant="outlined" color="primary"
            style={{ padding:'1% 1.5%', fontSize:'1em'}}>
            Learn More
          </Button>
          </div>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <img style={{textAlign:'center'}} src={operations}/>
          </Grid>
        </Grid>
      </div>
      <div class="custom-shape-divider-top-1612167412">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
        </svg>
        </div>
        <div style={{backgroundColor:'rgb(56, 39, 155)'}}>
        <div className={classes.spacing} style={{color:'white',paddingTop:'15%'}}>
            <Typography variant="h6" style={{fontSize:'3rem'}}>
              Works With Your  
            </Typography>
            <Typography variant="h6" style={{fontSize:'3rem'}}>
              Revenue Management Stack  
            </Typography>
            <Typography variant="h6" style={{paddingTop:'2%'}}>Managing sales, payments, customer experience or your books:</Typography>
            <Typography variant="h6" >if it affects your revenue cycle, Chargebee works with it.</Typography>
        </div>  
        <img style={{ textAlign:'center'}}src={revenueManagement}/>

        <Grid lg={12} md={12} sm={12} xs={12} container direction="row" style={{paddingTop:'5%'}}>
          <Grid item lg={6} md={6} sm={12} xs={12} style={{color:'white', paddingLeft:'10%'}}>
            <Typography  style={{color:'orangered', fontSize:'large'}}>
              Quote-to-Cash Automation
            </Typography>
            
            <Typography variant="h6" style={{ fontSize:'2em',paddingTop :'1.5% 0%', }}>
              Powers Sales and Marketing CRM
            </Typography>
            <img style={{width:'72%', padding:'2% 0'}} src={crmLogos}/>

            <Typography variant="h5" style={{fontSize:'1.5em'}}>
              Handle quotes, approvals, acceptance, and
            </Typography>
            <Typography variant="h5" style={{fontSize:'1.5em',marginBottom:'5%'}}>
              collections seamlessly from within the CRM.
            </Typography>
            <Button variant="contained" color="white"
            style={{ padding:'1% 1.5%', fontSize:'1em'}}>
            Learn More
          </Button>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} style={{color:'white', float:'left'}}>
            <Typography  style={{color:'orangered', fontSize:'large'}}>
              Offer More Payment Methods
            </Typography>
            
            <Typography variant="h6" style={{ fontSize:'2em',paddingTop :'1.5% 0%', }}>
              25+ Payment Gateways
            </Typography>
            <div style={{padding:'2% 0'}}>
              <Chip size="small"  label="Primary"  />
            </div>
            <Divider style={{width:'60%', height:'1%'}}/>
            <img style={{width:'58%', padding:'3% 0'}} src={pgLogos}/>
            
            <Typography variant="h5" style={{fontSize:'1.5em'}}>
              Accept payments across a wide array of
            </Typography>
            <Typography variant="h5" style={{fontSize:'1.5em',marginBottom:'5%'}}>
              gateways, geographies, and currencies.
            </Typography>
            <Button variant="contained" color="white"
            style={{ padding:' 1%', fontSize:'1em'}}>
            Learn More
          </Button>
          </Grid>
        </Grid>
        <Grid lg={12} md={12} sm={12} xs={12} container direction="row" className={classes.root2} style={{paddingTop:'5%'}}>
          <Grid item lg={6} md={6} sm={12} xs={12} style={{color:'white', paddingLeft:'10%'}}>
            <Typography  style={{color:'orangered', fontSize:'large'}}>
              Streamline Finance Operations
            </Typography>
            
            <Typography variant="h6" style={{ fontSize:'2em',paddingTop :'1.5% 0%', }}>
              Syncs with Accounting Software
            </Typography>
            <img style={{width:'72%', padding:'2% 0'}} src={accLogos}/>

            <Typography variant="h5" style={{fontSize:'1.5em'}}>
              Reconcile books in seconds, handle
            </Typography>
            <Typography variant="h5" style={{fontSize:'1.5em'}}>
              compliance, and recognize revenue
            </Typography>
            <Typography variant="h5" style={{fontSize:'1.5em',marginBottom:'5%'}}>
              painlessly.
            </Typography>
            <Button variant="contained" color="white"
            style={{ padding:'1% 1.5%', fontSize:'1em'}}>
            Learn More
          </Button>
          </Grid>
          </Grid>
           
            

            <Grid container direction="row" xs={12} lg={12} sm={12} md={12}>
        <Grid lg={3}  md={3} sm={3} xs={3} ></Grid>
        <Grid lg={3}  md={3} sm={3} xs={3} > 
          <Typography variant="h5" style={{fontWeight:'bold',color:"white"}} > Talk to us today about</Typography>
          <Typography variant="h5" style={{fontWeight:'bold',color:"white"}}  >your revenue workflow</Typography>
        </Grid>
        <Grid lg={3}  md={3} sm={3} xs={3} >
        <Button variant="contained" color="primary"  
                  style={{ padding:'3% 5%',  fontSize:'1.5em'}}>
                  Schedule a Demo
          </Button>
           </Grid>
        <Grid lg={3}  md={3} sm={3} xs={3} > </Grid>
          
        </Grid>

        <div style={{paddingTop:'5%', paddingBottom:'8%' }}>
        <hr style={{width:'80%',color:"white",justifyContent:"center"}} />
        </div>
            <Grid ls={12} md={12} xs={12} sm={12} container direction="row" >
            <Grid ls={2} md={2} xs={4} sm={4}/>
            <Grid ls={8} md={8} xs={4} sm={4}>
              <div className={classes.tab} >
              <div position="static" >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
                  aria-label="full width tabs example"
                >
                  <Tab label="Rethink Pricing" style={{ color:'white'}} {...a11yProps(0)} />
                  <Tab label="Automate FinOps" style={{ color:'white'}} {...a11yProps(1)} />
                  <Tab label="Go Global" style={{ color:'white'}} {...a11yProps(2)} />
                </Tabs>
              </div>
              <SwipeableViews className={classes.tab1}
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel value={value} index={0} dir={theme.direction}>
                  <Grid ls={12} md={12} xs={12} sm={12} container direction="row" >
                  <Grid ls={5} md={5} xs={4} sm={4} className="tab1" >
                  <Typography variant="h7" >
                    Achieved
                  </Typography>
        
                  <Typography variant="h6" style={{ fontSize:'4.5rem', fontWeight:'bold ', paddingLeft:'3%' }}>
                    20x
                  </Typography>
                  <Typography variant="h5" style={{ paddingLeft:'3%'}}>
                    ROI with Chargebee.
                  </Typography>
                  
                    <Grid ls={8} md={8} xs={4} sm={4} container direction="row" style={{paddingTop:'6%'}}>
                      <Grid ls={6} md={6} xs={4} sm={4} style={{paddingTop:'2%'}}>
                      <hr style={{color:'white', width:'80%', }}/>
                      </Grid>
                      <Grid ls={6} md={6} xs={4} sm={4}>
                      <Button variant="outlined" style={{color:'white'}}>
                          Read More
                        </Button>
                      </Grid>
                    </Grid>
                    
                  </Grid>
                  <Grid ls={7} md={7} xs={4} sm={4} className="tab1-2">
                    <Typography variant="h5" style={{paddingLeft:'7%'}}>
                      "Chargebee has all the concepts of metered 
                    </Typography>
                    <Typography variant="h5" style={{paddingLeft:'7%'}}>
                      billing, flat and tiered pricing. If we decide to
                    </Typography>
                    <Typography variant="h5" style={{paddingLeft:'7%'}}>
                      change the way we want bill or the price 
                    </Typography>
                    <Typography variant="h5" style={{paddingLeft:'7%'}}>
                      structure, it would be accounted for, excuse the
                    </Typography>
                    <Typography variant="h5" style={{paddingLeft:'7%', paddingBottom:'15%'}}>
                      pun." 
                    </Typography>
                    <Typography variant="h5" style={{paddingLeft:'7%', paddingBottom:'1%', fontWeight:'bold'}}>
                      Natan Field 
                    </Typography>
                    <div style={{display:'flex',paddingBottom:'2%'}}>
                    <Typography variant="h6" style={{paddingLeft:'7%'}}>
                      Marketing
                    </Typography><Typography variant="h6" style={{ paddingLeft:'40%', fontWeight:'bold'}}>
                    𝓓𝓡𝓐𝓦𝓑𝓞𝓐𝓡𝓓
                  </Typography>
                    </div>
                  </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                <Grid ls={12} md={12} xs={12} sm={12} container direction="row" >
                <Grid ls={5} md={5} xs={4} sm={4} className="tab2" >
                <Typography variant="h7" >
                  Saved
                </Typography>
      
                <Typography variant="h6" style={{ fontSize:'4.5rem', fontWeight:'bold ', paddingLeft:'3%' }}>
                  105 hrs
                </Typography>
                <Typography variant="h5" style={{ paddingLeft:'3%'}}>
                  in manual accounting.
                </Typography>
                <Grid ls={8} md={8} xs={4} sm={4} container direction="row" style={{paddingTop:'6%'}}>
                      <Grid ls={6} md={6} xs={4} sm={4} style={{paddingTop:'2%'}}>
                      <hr style={{color:'white', width:'80%', }}/>
                      </Grid>
                      <Grid ls={6} md={6} xs={4} sm={4}>
                      <Button variant="outlined" style={{color:'white'}}>
                          Read More
                        </Button>
                      </Grid>
                    </Grid>
                </Grid>
                <Grid ls={7} md={7} xs={4} sm={4} style={{paddingBottom:'4%', paddingTop:'7%'}}>
                  <Typography variant="h5" style={{paddingLeft:'7%'}}>
                    "Our fiance and accounting teams now save up to 
                  </Typography>
                  <Typography variant="h5" style={{paddingLeft:'7%'}}>
                  105 hours of manual accounting every month.  
                  </Typography>
                  <Typography variant="h5" style={{paddingLeft:'7%'}}>
                  We now have more time to do financial analysis  
                  </Typography>
                  <Typography variant="h5" style={{paddingLeft:'7%', paddingBottom:'20%'}}>
                  and make strategic business decisions. "
                  </Typography>
                  
                  <Typography variant="h5" style={{paddingLeft:'7%', paddingBottom:'1%', fontWeight:'bold'}}>
                    Ayush Patel 
                  </Typography>
                  <div style={{display:'flex',paddingBottom:'2%'}}>
                  <Typography variant="h6" style={{paddingLeft:'7%'}}>
                    Finance
                  </Typography><Typography variant="h6" style={{ paddingLeft:'40%', fontWeight:'bold'}}>
                    Fishburners
                  </Typography>
                  </div>
                </Grid>
                </Grid>
                </TabPanel>
                
                <TabPanel value={value} index={2} dir={theme.direction}>
                <Grid ls={12} md={12} xs={12} sm={12} container direction="row" >
                <Grid ls={5} md={5} xs={4} sm={4} className="tab3" >
                <Typography variant="h7" >
                  Grew MRR by
                </Typography>
      
                <Typography variant="h6" style={{ fontSize:'4.5rem', fontWeight:'bold ', paddingLeft:'3%' }}>
                  15%
                </Typography>
                <Typography variant="h5" style={{ paddingLeft:'3%'}}>
                  and expanded globally from Europe. 
                </Typography>
                <Grid ls={8} md={8} xs={4} sm={4} container direction="row" style={{paddingTop:'6%'}}>
                      <Grid ls={6} md={6} xs={4} sm={4} style={{paddingTop:'2%'}}>
                      <hr style={{color:'white', width:'80%', }}/>
                      </Grid>
                      <Grid ls={6} md={6} xs={4} sm={4}>
                      <Button variant="outlined" style={{color:'white'}}>
                          Read More
                        </Button>
                      </Grid>
                    </Grid>
                </Grid>
                <Grid ls={7} md={7} xs={4} sm={4} style={{paddingBottom:'1%', paddingTop:'7%'}}>
                  <Typography variant="h5" style={{paddingLeft:'7%'}}>
                    "As a European company selling in Europe but also 
                  </Typography>
                  <Typography variant="h5" style={{paddingLeft:'7%'}}>
                    Europe, it was critical for us to be able to have two 
                  </Typography>
                  <Typography variant="h5" style={{paddingLeft:'7%'}}>
                  currencies-euros and dollars. VAT was another  
                  </Typography>
                  <Typography variant="h5" style={{paddingLeft:'7%'}}>
                  aspect we really wanted to be automated.
                  </Typography>
                  <Typography variant="h5" style={{paddingLeft:'7%', paddingBottom:'17%'}}>
                   This was a gamechanger with Chargebee."
                  </Typography>
                  
                  <Typography variant="h5" style={{paddingLeft:'7%', paddingBottom:'1%', fontWeight:'bold'}}>
                    Valentin Huang
                  </Typography>
                  <div style={{display:'flex',paddingBottom:'2%'}}>
                  <Typography variant="h6" style={{paddingLeft:'7%'}}>
                    Co-founder
                  </Typography><Typography variant="h6" style={{ paddingLeft:'40%', fontWeight:'bold'}}>
                    Fishburners
                  </Typography>
                  </div>
                </Grid>
                </Grid>
                </TabPanel>
              </SwipeableViews>
            </div>
            </Grid>
              <Grid ls={2} md={2} xs={4} sm={4}></Grid>
            </Grid>
            </div>

         <div class="custom-shape-divider-bottom-1612272582">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
              </svg>
          </div>


          
      
        <Grid container direction="row" xs={12} lg={12} sm={12} md={12}>
          <Grid xs={3} lg={3} sm={3} md={3}></Grid>
          <Grid xs={6} lg={6} sm={6} md={6}>
          <Typography variant="h4" style={{fontWeight:'bold',color:"white"}} >Great Products Deserve Hyper Growth.</Typography>
          <Typography variant="h4" style={{fontWeight:'bold',color:"white"}}  >Chargebee Makes it Easy.</Typography>
          </Grid>
          <Grid xs={3} lg={3} sm={3} md={3}></Grid>
          
        </Grid>


      <Grid container direction="row" xs={12} lg={12} sm={12} md={12} style={{padding:'7% 0'}}>
        <Grid lg={8}  md={8} sm={6} xs={6} > 
          <Typography variant="h6" style={{textAlign:'center',fontSize:'2.5rem',fontWeight:'bold'}}>Still unsure? Step Inside and See</Typography>
          <Typography variant="h6" style={{textAlign:'center',fontSize:'2.5rem',fontWeight:'bold'}}>What The Future Looks Like.</Typography>

        </Grid>
        <Grid   lg={4}  md={4} sm={6} xs={6} style={{paddingTop:'40px'}}>
          <Button variant="contained" color="primary"  
                  style={{   fontSize:'1.5em'}}>
                  Schedule a Demo
          </Button>
        </Grid>
      </Grid>

      {/*footer */}
     
      <div style={{fontFamily:'Arial', paddingBottom:'5%'}}>
        <Grid container direction="row" xs={12} lg={12} sm={12} md={12}>
          
          <Grid lg={3}  md={3} sm={3} xs={3}>
              <Grid direction="column" justify="flex-start" style={{lineHeight:"2em", listStyle:"none"}}>
              <div style={{float:'right'}}>
                <p style={{fontWeight:"bold", }}>Product</p>
                <Typography  style={{color:"#230DF3",}}>Subscription Management</Typography>
                <Typography  style={{color:"#230DF3"}}>Recurring Billing and Invoicing</Typography>
                <Typography  style={{color:"#230DF3"}}>Recurring Payments</Typography>
                <Typography  style={{color:"#230DF3"}}>Accounting and Taxes</Typography>
                <Typography  style={{color:"#230DF3"}}>SaaS Reporting</Typography>
                <Typography  style={{color:"#230DF3"}}>Enterprise Billing</Typography>
                <Typography  style={{color:"#230DF3"}}>Integrations</Typography>   
              </div>
              </Grid>
          </Grid>

          <Grid lg={3}  md={3} sm={3} xs={3}>
              <Grid direction="column" justify="flex-start" style={{lineHeight:"2em",  listStyle:"none"}}>
              <div style={{float:'right'}}>
                <p style={{fontWeight:"bold"}}>Help & Support</p>
                <Typography  style={{color:"#230DF3"}}>Security</Typography>
                <Typography  style={{color:"#230DF3"}}>FAQs</Typography>
                <Typography  style={{color:"#230DF3"}}>Status</Typography>
                <Typography  style={{color:"#230DF3"}} >Product Documentation</Typography>  
                <Typography  style={{color:"#230DF3"}}>API Documentation</Typography>
                <Typography  style={{color:"#230DF3"}}>Supported Payment Gateways</Typography>
                <Typography  style={{color:"#230DF3"}}>Sitemap</Typography>
           
              </div>
              </Grid>
          </Grid>

          <Grid lg={3}  md={3} sm={3} xs={3}>
              <Grid direction="column" justify="flex-start" style={{lineHeight:"2em", listStyle:"none"}}>
              <div style={{float:'right'}}>
                <p style={{fontWeight:"bold"}}>Resources</p>
                <Typography  style={{color:"#230DF3"}}>Blog</Typography>
                <Typography  style={{color:"#230DF3"}}>Compare Payment Gateways</Typography>
                <Typography  style={{color:"#230DF3"}}>Tackling Payment Failures</Typography>
                <Typography  style={{color:"#230DF3"}}>Enterprise Billing Guide</Typography>
                <Typography  style={{color:"#230DF3"}}>Webinars</Typography>
                <Typography  style={{color:"#230DF3"}}>Glossaries</Typography> 
              </div>
              </Grid>
          </Grid>

          <Grid lg={3}  md={3} sm={3} xs={3}>
              <Grid direction="column" justify="flex-start" style={{lineHeight:"2em", listStyle:"none"}}>
              <div style={{paddingLeft:'20%'}}>
                <p style={{fontWeight:"bold"}}>Company</p>
                <Typography style={{color:"#230DF3"}}>Customers</Typography>
                <Typography style={{color:"#230DF3"}}>Partners</Typography>
                <Typography style={{color:"#230DF3"}}>Careers</Typography>
                <Typography style={{color:"#230DF3"}} >Press</Typography>
                <Typography style={{color:"#230DF3"}}>Terms</Typography>
                <Typography style={{color:"#230DF3"}}>Privacy</Typography>
              
              </div>
              </Grid>
          </Grid>
         
   
      </Grid>


      <Grid container direction="row" xs={12} lg={12} sm={12} md={12}>
      <Grid xs={6} lg={6} style={{marginTop:"2em"}}  container direction="row">
      <img src={sign} style={{paddingLeft:'20%', height:'60%',marginTop:"1em"}}/>
            {/* <h2 style={{color:"Black",paddingLeft:"150px"}}>𝒞𝒽𝒶𝓇𝑔𝑒𝒷𝑒𝑒 </h2> */}
          </Grid>
          <Grid xs={12} lg={6} style={{ textAlign:"right",marginTop:"1em"}} >
            <div className="end_line">
            <Grid className="fontsapps" container direction="row" lg={12} md={12} sm={12} xs={12} style={{display:"flex", justifyContent:"center",paddingTop:"40px"}}>
              <span><a style={{color:"Black"}} target="_blank"><FacebookIcon /></a></span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span><a style={{color:"Black"}} target="_blank"><TwitterIcon /></a></span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span><a style={{color:"Black"}} target="_blank"><YouTube /></a></span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span><a style={{color:"Black"}}  target="_blank"><LinkedInIcon /></a></span>
            </Grid>
            </div>
          </Grid>
        </Grid>  
    </div>
      

          {/* sticky footer */}
          <div class="footer">
            <p>Adapting to a membership-first revenue model for publications — 
            An in-depth chat with Zetland's CEO, Tav Klitgaard. Save your free spot →</p>
          </div>


    </div>
  );
}
