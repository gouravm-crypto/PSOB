const TEAM_META = {"team": "Post Sale - Outbound", "month": "September 2026", "params": ["ss", "etq", "prob", "sol", "fu", "tag"]};
const AGENTS = {
 "khushij": {
  "name": "Khushi_J",
  "initials": "KJ",
  "color": "#0d9488",
  "cq": 97,
  "audits": 25,
  "ncf": 0,
  "totalErrors": 6,
  "params": {
   "ss": 4,
   "etq": 0,
   "prob": 1,
   "sol": 0,
   "fu": 0,
   "tag": 1
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 1 of 25 audits, for example on the Order Cancellation case (16 Sep). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   },
   {
    "cat": "tag",
    "label": "Tagging",
    "text": "Tagging missed / wrap timeout flagged in 1 of 25 audits, for example on the Document required case (10 Sep). Complete tagging and wrap-up within the wrap time."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missing positive/ownership phrases flagged in 1 of 25 audits, for example on the Document required case (10 Sep). Use ownership phrases such as \"I will personally check this for you\" or \"Let me make sure this gets resolved\" instead of neutral or negative wording."
   }
  ],
  "cases": [
   {
    "query": "Shaya Product Quality Issue",
    "score": 100,
    "ncf": false,
    "date": "31 Aug",
    "comment": "Broken product received and Cx has raised an return for the same and CX informed that she has raised the concern in WA. Cx has raised the KF wrongly like product damaged \"NO\" and New KF needs to be raised and JC check with the Cx and raised an New KF for the pick up."
   },
   {
    "query": "Repair Charges Dispute",
    "score": 88,
    "ncf": false,
    "date": "01 Sep",
    "comment": "Cx had given a product for repair and the OB call was made to get the confirmation on the repair charges. Jc informed on the charges and cx required time to decide on it CB for later was informed. Tone reflected to fumble as well as confused were greeted her as sir"
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "01 Sep",
    "comment": "Retention Cx had a cancellation request placed and call was made for it. Jc did the necessary probing, trying to retain the cx however later as cx wanted to proceed with the cancellation needful was done Overall a good try to retain the cx (IVR - BOD)"
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "02 Sep",
    "comment": "Cancellation call, Cx was looking for placing an New Order and the the once placed an MTO since CX cancelled and amount has been transfered to Proflie balance. Retained."
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "02 Sep",
    "comment": "Cancellation call. Cx wish to have the Order cancelled and placed an another product, Retention tried but Cx wish to cancel and refund."
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "02 Sep",
    "comment": "Cancellation requested, Cx asked to have the Order cancelled and not willing to proceed with the Order ad needs refund. Retention tried but Cx needs MB only."
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "02 Sep",
    "comment": "Cancellation call, Person reason and Cx wish to cancel and proceed with the refund, Retention tried but Cx needs refund only."
   },
   {
    "query": "Repair Request",
    "score": 100,
    "ncf": false,
    "date": "04 Sep",
    "comment": "Repair Charges call, recasting needs to be done. Cx was not fine with the same and Cx wish to go with LTE."
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "07 Sep",
    "comment": "Due to delay in delivery Cx wish to have the Order cancelled. Cx is reaslly disappointed due to the delay in delivery and dnt want the delivery of the Order. Retention tried."
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "09 Sep",
    "comment": "Cx needs the delivery of the Order on the same day and JC checked and informed the details. Order was delivered on the same day. Cx has raised an cancellation for another product and Retention tried by JC but Order has been disapcthed and JC informed the details. Cx was irate post raising Cancellation the same as dispatched and needs to wait for the refund. Over all teh JC handelled the call well."
   },
   {
    "query": "Repair Charges Dispute",
    "score": 88,
    "ncf": false,
    "date": "10 Sep",
    "comment": "Cx had given a product for resizing and the OB call was made to get the confirmation on the charges. Jc informed on the charges and however as cx was not happy with charges cx requested to have the product sent back. Timely apology was to be given as well as need to probe when cx mentioned ki its been 10 days resize karke mil jaega. Wrap time out - BOD (Pay nhi karna chahate ho toh, Aapko pehele inform karo - better pharsing during this was to be done)"
   },
   {
    "query": "Document required",
    "score": 90,
    "ncf": false,
    "date": "10 Sep",
    "comment": "Call was made to get the ID proof from the cx due to high risk alert received. Jc informed about it to the cx however cx had the ID proof updated but accordingly as a change is billing address was required post getting the confirmation needful was done Could try communicating the difference in billing address and shipping address for better clarity also try explaining her better that it's not a scam Timely apology could have been done"
   },
   {
    "query": "Document required",
    "score": 95,
    "ncf": false,
    "date": "10 Sep",
    "comment": "Call was made to get the ID proof from the cx due to high risk alert received. Jc informed about it to the cx however cx denied to have the ID shared and so jc informed that she would have a check on it Wrap time out (Timely apology could have been done, Failed to check further assistance - BOD)"
   },
   {
    "query": "Repair Status / Logistics",
    "score": 100,
    "ncf": false,
    "date": "10 Sep",
    "comment": "Cx had given a product for resizing and the OB call was made to get the confirmation on the charges. Jc informed on the charges and as per the confirmation from the cx on it needful was done. Avoid overlapping"
   },
   {
    "query": "Repair Charges Dispute",
    "score": 100,
    "ncf": false,
    "date": "11 Sep",
    "comment": "repair call cx was not happy with the charges & cx did not want to pay as she felt it was quality issue. JC convenced the cx with multiple FU & labour charge waved offf & assited cx with just paying the repair charges."
   },
   {
    "query": "Order Tracking / Status",
    "score": 100,
    "ncf": false,
    "date": "15 Sep",
    "comment": "Need ID Proof, Cx was irate and not interested in sharing the ID proof and informed the JC to have the Order cancelled and proceed with refund. But there was some issue with the WS and the error and no docs needed and Order has been delivered to the Cx"
   },
   {
    "query": "Order Cancellation",
    "score": 88,
    "ncf": false,
    "date": "16 Sep",
    "comment": "Cancellation call and due to delay in delivery Cx wish to have the Order cancelled. Retention tried but Cx needs refund only., JC tried for PB transfer and Cx agreed."
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "17 Sep",
    "comment": "Retention Cx had a cancellation request placed due to delay delivery and call was amde for it. Jc had a check did the necessary probing trying to retain however as cx wanted to proceed with the cancellation needful was done."
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "17 Sep",
    "comment": "Retention Cx had a cancellation request placed and call was amde for it. Jc had a check did the necessary probing trying to retain however as cx wanted to proceed with the cancellation needful was done. (Avoid overlapping)"
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "18 Sep",
    "comment": "Over all a fine call, Cx was not satified with the product and wish to hav ethe product cancelled and its an defective product too. JC checked and informed the details of the POP that is used by the Cx and the reversal of the same etc. Cx was fine with the details shared and over all the JC has shared the details to the Cx and WA Connectivity informed."
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "21 Sep",
    "comment": "Cancellation call and due to delay in delivery Cx wish to have the Order cancelled and needs refund. Retention tried but Cx needs refund Only."
   },
   {
    "query": "Order Cancellation",
    "score": 88,
    "ncf": false,
    "date": "21 Sep",
    "comment": "JC contacted the customer regarding a gold product cancellation, as the customer requested a refund due to a delivery delay. The customer also sought clarification regarding a Shaya order, which the JC resolved. However, the JC could have proactively probed about the silver earrings the customer wanted placed for immediate delivery.The agent should also aim for more enthusiastic tone"
   },
   {
    "query": "Repair Request",
    "score": 100,
    "ncf": false,
    "date": "21 Sep",
    "comment": "customer wished to reshape a damaged product, but because reshaping was not feasible, it required melting and recasting at an additional charge. Upon learning about the charges, the customer expressed dissatisfaction, declined the service, and requested the item be returned in its current condition."
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "22 Sep",
    "comment": "Retention customer requested an order cancellation due to a delivery delay, as she specifically required the item by the 13th. Since the estimated delivery date did not align with her timeline, she preferred to cancel and declined purchasing an alternative item"
   },
   {
    "query": "Random",
    "score": 100,
    "ncf": false,
    "date": "25 Sep",
    "comment": "Good call, AOI - Please be more appriciative and enthutheastic on call when cx wishes to proceed with CL instead of cancellation. Will discuss during feedback, BOD audit for now."
   }
  ],
  "paramCaseMap": {
   "ss": [
    1,
    11,
    16,
    21
   ],
   "etq": [],
   "prob": [
    10
   ],
   "sol": [],
   "fu": [],
   "tag": [
    12
   ]
  }
 },
 "sanjanaj": {
  "name": "Sanjana_J",
  "initials": "SJ",
  "color": "#7c3aed",
  "cq": 95,
  "audits": 27,
  "ncf": 0,
  "totalErrors": 10,
  "params": {
   "ss": 8,
   "etq": 1,
   "prob": 0,
   "sol": 0,
   "fu": 0,
   "tag": 1
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missing positive/ownership phrases flagged in 3 of 27 audits, for example on the Order Tracking / Status case (10 Sep). Use ownership phrases such as \"I will personally check this for you\" or \"Let me make sure this gets resolved\" instead of neutral or negative wording."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Monotonous or dragging delivery flagged in 2 of 27 audits, for example on the Order Cancellation case (21 Sep). Bring energy and variation into your voice. A flat or dragging delivery reads as disinterest even when the resolution is right."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 1 of 27 audits, for example on the Order Cancellation case (02 Sep). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   }
  ],
  "cases": [
   {
    "query": "Order Tracking / Status",
    "score": 100,
    "ncf": false,
    "date": "27 Aug",
    "comment": "Call was made to get the confirmation on the delivery added to have the product sent back to the cx post pick up. Jc did the necessary probing however initally could have started to explain it better in regards with why the adress confirmation that as she wants the delivery of the same order which was picked up."
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "27 Aug",
    "comment": "Cancellation call, Gift Order and the occassion has been called off, since Cx was looking cancellation and JC informed that she will have the same cancelled and profile balance informed but Cx needs refun only and Order was cancelled and Refund TAT informed."
   },
   {
    "query": "Order Cancellation",
    "score": 90,
    "ncf": false,
    "date": "31 Aug",
    "comment": "Retention Call was made to inform the cx that during the invoicing it was observed that there was a issue with the quality of the product and so the same can't be dispatched. Jc communicated it and retained the cx by making a purchase of a alternative design. However initially failed to understand that cx confirmed that he wish to proceed with a purchase of a alternative product. Avoid sounding confused while giving the opening, Avoid directly pitching for the refund to source"
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "02 Sep",
    "comment": "Due to delay in delivery and its an MTO Order Cx wish to cancel the Order. Since Cx has placed the Order needs the refund to the source."
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "02 Sep",
    "comment": "Cx infor ed that she wish to have he Order cancelled and JC suggested with Profile balance but Cx needs refund to source only. Retentuin tried."
   },
   {
    "query": "Order Cancellation",
    "score": 75,
    "ncf": false,
    "date": "02 Sep",
    "comment": "Weight has been increased and Cx has paid the amount for the same. Cx has alreadt made the Payment alreadt. Dead air on call to be avoided and Cx was facing issue in the delay in dispatch and delivery JC needs to owe more apology and empathy on call."
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "02 Sep",
    "comment": "Balance Payment needs to be collected and Cx needs the delivery asap but the same cant been done due to balance payment not received, need empathy on call since we cant make the Order delivery on the date that the Cx asked for. Cx asked to cancel the Order."
   },
   {
    "query": "Repair Request",
    "score": 100,
    "ncf": false,
    "date": "05 Sep",
    "comment": "Repair Charges call, break on the charges informed and Cx agreed for the charges."
   },
   {
    "query": "Repair Request",
    "score": 100,
    "ncf": false,
    "date": "07 Sep",
    "comment": "Repair Charges call. Cx was fine wth the charges, Cx said that she is gettiong call for the same every day but it was not properly connected calls. Felt like starting of the call was a little bit of confident issue, BOD."
   },
   {
    "query": "Return Initiation / Request",
    "score": 100,
    "ncf": false,
    "date": "09 Sep",
    "comment": "JC wants to confirm that the product that the Cx wish to return is an Broken condition or not cx agreed that its broken from her end and pick up and refund details shared to the Cx."
   },
   {
    "query": "Order Tracking / Status",
    "score": 81,
    "ncf": false,
    "date": "10 Sep",
    "comment": "One of the design which cx had placed the order for was discontinued and call was made to inform the same. Jc informed the required details and then teh order was cancelled. However as cx wanted a confirmation on the refund possibilities CB was done post checing it. Wrap time out, Could have conveyed the same info in better alternative phrase"
   },
   {
    "query": "Shaya Wrong product recieved",
    "score": 88,
    "ncf": false,
    "date": "10 Sep",
    "comment": "Call was made in regards with the pick up of the product which was delivered in the month of Feb. Jc did the necessary probing however as she was not aware of it informed that she would have a check and so on the next day Jc got connected to the cx again Could have apologised but starting the conversation with better clarity"
   },
   {
    "query": "Shaya Wrong product recieved",
    "score": 88,
    "ncf": false,
    "date": "10 Sep",
    "comment": "Cx didn't receive the product and so had the cancellation request placed. Call was made in regards with getting clarity on the delivery of it. Necessary probing done however could have used better phrases by not getting confused"
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "10 Sep",
    "comment": "Retention Cx had a cancellation request placed and call was amde for it. Jc had a check did the necessary probing trying to retain however as cx wanted to proceed with the cancellation needful was done."
   },
   {
    "query": "Repair Request",
    "score": 100,
    "ncf": false,
    "date": "11 Sep",
    "comment": "Cx wanted to increase the length of the product. JC called & shared the price for additional link however cx was not ready to pay first asked to check if anything can be done later on the FU call cx agreed to make the paymennt & proceed with the charges GOOD JOB handeling the cx."
   },
   {
    "query": "Order Cancellation",
    "score": 88,
    "ncf": false,
    "date": "15 Sep",
    "comment": "Cancellation call, Retention tried but Cx wish to visit the Store and make the purchase. Order cancelled and refund done to Store. Due to delay in delivery Cx wish to have the Order cancelled, need apology and empathy on call."
   },
   {
    "query": "Document required",
    "score": 88,
    "ncf": false,
    "date": "17 Sep",
    "comment": "Call was made to get the ID proof from the cx against the GC order placed. Jc did the necessary probing by getting connected to the cx via WA. Sounded Monotonous on the 1st call (I beleive it is in PDF format - Better phrasing)"
   },
   {
    "query": "Shaya Order Status / Tracking",
    "score": 100,
    "ncf": false,
    "date": "17 Sep",
    "comment": "Call was made to inform the cx that the order placed by her is found to be broken during invoicing and so we won't ne able to proceed with this order. Jc informed the required details however as cx wanted to proceed with the cancellation needful was done. (Failed to communicate in preferred language - BOD)"
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "18 Sep",
    "comment": "Order cant be processed since the Manufacturing of the same SKU has been closed and JC informed that Cx has select for another design if not refund will be done. Cx needs refund only. TAT informed."
   },
   {
    "query": "Repair Request",
    "score": 100,
    "ncf": false,
    "date": "21 Sep",
    "comment": "Repair Charges call and CX said that he has meet with an Accident and the product is given for repair. JC checked for the repair charges waiver as per the Cx request but the same was rejected and Cx agreed for the repair and product was sent to repair."
   },
   {
    "query": "Call audit",
    "score": 100,
    "ncf": false,
    "date": "21 Sep",
    "comment": "Good work!"
   },
   {
    "query": "Call audit",
    "score": 100,
    "ncf": false,
    "date": "21 Sep",
    "comment": "Good work!"
   },
   {
    "query": "Call audit",
    "score": 100,
    "ncf": false,
    "date": "21 Sep",
    "comment": "Good work!"
   },
   {
    "query": "Call audit",
    "score": 100,
    "ncf": false,
    "date": "21 Sep",
    "comment": "Good work!"
   },
   {
    "query": "Order Cancellation",
    "score": 75,
    "ncf": false,
    "date": "21 Sep",
    "comment": "customer expressed that the product felt too thin and lightweight, stating a preference to purchase a 2-gram option. The JC failed to properly acknowledge this feedback and maintained a monotonous, seemingly distracted tone throughout the call"
   },
   {
    "query": "Repair Request",
    "score": 100,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Repair Charges call, Break of the charges informed. Cx said that she will call us back and JC has called the Cx back for the same but no response and JC shared the proof that she was connected on call with the Cx."
   },
   {
    "query": "Repair Charges",
    "score": 100,
    "ncf": false,
    "date": "25 Sep",
    "comment": "Revised audit - good work!!"
   }
  ],
  "paramCaseMap": {
   "ss": [
    2,
    5,
    10,
    11,
    12,
    15,
    16,
    24
   ],
   "etq": [
    5
   ],
   "prob": [],
   "sol": [],
   "fu": [],
   "tag": [
    10
   ]
  }
 },
 "akbarm": {
  "name": "Akbar_M",
  "initials": "AM",
  "color": "#2563eb",
  "cq": 95,
  "audits": 25,
  "ncf": 0,
  "totalErrors": 11,
  "params": {
   "ss": 6,
   "etq": 0,
   "prob": 2,
   "sol": 3,
   "fu": 0,
   "tag": 0
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 3 of 25 audits, for example on the Order Tracking / Status case (15 Sep). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   },
   {
    "cat": "sol",
    "label": "Solution & Rec.",
    "text": "Incomplete information flagged in 2 of 25 audits, for example on the Order Tracking / Status case (15 Sep). Close the information gap completely: share the full process, TAT and next steps, and address every point the customer raised."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missing positive/ownership phrases flagged in 1 of 25 audits, for example on the Order Tracking / Status case (27 Aug). Use ownership phrases such as \"I will personally check this for you\" or \"Let me make sure this gets resolved\" instead of neutral or negative wording."
   }
  ],
  "cases": [
   {
    "query": "Order Tracking / Status",
    "score": 90,
    "ncf": false,
    "date": "27 Aug",
    "comment": "Cx had a order placed were due to invoicing issue they weren't able to dispatch it and call was made to provide an update to the cx on it. Jc explained about the scenario however timely apology as well as better phrasing could have been done. Avoid using multiple fillers and sound confident, Better phrasing for - I will not be having that information and phrases similar to this"
   },
   {
    "query": "Repair Request",
    "score": 88,
    "ncf": false,
    "date": "28 Aug",
    "comment": "Cx has given the profuvt for repair and JC Called the Cx to inform the charges and Cx was having dispute with the product and needs to sent back as it is and Cx said that its getting repeated and dimond is gettng missed. JC informed that he will check and arrange a call back. BOD. Need empathy on call."
   },
   {
    "query": "Order Cancellation",
    "score": 88,
    "ncf": false,
    "date": "31 Aug",
    "comment": "Retention Cx had a cancellation request placed and call was made for it. Jc did the necessary probing, trying to retain the cx however later as cx wanted to proceed with the cancellation needful was done. Addressed incorrectly as sameer khan (Need to specify 7-10 *working* days, Missed to inform that if it's cr. card refund timeline is 10-12 wrking days)"
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "02 Sep",
    "comment": "Cancellation call, due to person reason Cx wish to have the Order cancelled, Profile balance informed but Cx needs refund only."
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "02 Sep",
    "comment": "Cx wish to visit the store and make the purchase, KJC suggested for the profile balance but Cx needs refund only."
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "02 Sep",
    "comment": "SHAYA Order Cancellation requested and Cx wish to visit the store, Profile balance suggested but Cx agreedfor the same."
   },
   {
    "query": "Order Cancellation",
    "score": 88,
    "ncf": false,
    "date": "02 Sep",
    "comment": "Cx has raised for the Cancellation and due to delay in delivery Cx wish to have the Order cancelled. Cx needs refund only, JC needs to inform the CX that Order placed and its comes from an differt location and the same SKU in any near by stores needs to be checked by the JC and if there needs to pitch for the Store visit, BOD."
   },
   {
    "query": "Repair Request",
    "score": 100,
    "ncf": false,
    "date": "04 Sep",
    "comment": "Repair Charges call, Over all a fine call and cx was fine with the repair charges."
   },
   {
    "query": "Return Initiation / Request",
    "score": 88,
    "ncf": false,
    "date": "07 Sep",
    "comment": "Retention Cx had a concern in regards with the cancellation of the product which was shipped. Jc had a check over the details did the necessary probing tried to retain the cx however as cx wanted to proceed with cancellation needful was done. Always need to mention the timeline of the pick up and refund (Avoid skipping to mention about the QC check, Timely apology)"
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "07 Sep",
    "comment": "Retention Call was made to the cx in regards with the cancellation request placed from the cx end. Jc did the necessary probing tying to retain the cx however as cx wanted to proceed with the cancellation needful was done However could have apologised when cx mentioned about the revision in the delivery timeline and he required it on a specific date."
   },
   {
    "query": "Repair Charges Dispute",
    "score": 90,
    "ncf": false,
    "date": "07 Sep",
    "comment": "Call was made to get the confirmation on the repair charges from the cx. Jc did the necessary probing however to get the confirmation on the chargescall was to be made on an another no. needful was done. Missed to check that store team already mentioned to which no. Call to get the confirmation on the repair charges was to be made (Could have apologised, Failed to check further assistance)"
   },
   {
    "query": "Repair Charges Dispute",
    "score": 100,
    "ncf": false,
    "date": "07 Sep",
    "comment": "Cx has given the product for repair and not fine with the charges and blames that its an Manufacturing issue and the lock is the issue. JC tried explaining the detals but Cx is not fine with the details shared. Raperi Charges dispute. Aqsa raised for the CE and Approved for the repair charges waiver."
   },
   {
    "query": "Repair Charges Dispute",
    "score": 88,
    "ncf": false,
    "date": "07 Sep",
    "comment": "Cx had given a product for repair and the OB call was made to get the confirmation on the repair charges. Jc informed on the charges and as per the confirmation needful was done. Avoid sounding to fumble"
   },
   {
    "query": "Repair Request",
    "score": 100,
    "ncf": false,
    "date": "09 Sep",
    "comment": "Repair Charges call. Cx agreed for the repair charges and TAT informed by JC."
   },
   {
    "query": "Repair Request",
    "score": 100,
    "ncf": false,
    "date": "11 Sep",
    "comment": "Cx repair charges were explined, cx wanted to check & confirm requested for a call back. Later cx was not responding."
   },
   {
    "query": "Order Tracking / Status",
    "score": 75,
    "ncf": false,
    "date": "15 Sep",
    "comment": "Cx has received an WRONG PRODUCT, PD Call. # S939C42C, Cx is looking for the same product that she has placed the Ordered for and 15 days exchange raised and JC informed that the same SKU that the Cx has placed for will be delivered to the Cx. TAT missed to inform and New order needs to be placed once the exchange amount has been credited to CX profile info needs to be shared with the CX. Need more apology and empathy on call and need to inform the valid TAT for the process."
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "16 Sep",
    "comment": "Retention Cx had a cancellation request placed and call was amde for it. Jc had a check did the necessary probing trying to retain however as cx wanted to proceed with the cancellation needful was done. Rate of speech need to be moderate"
   },
   {
    "query": "Repair Request",
    "score": 100,
    "ncf": false,
    "date": "16 Sep",
    "comment": "Repair Charges call. Cx was fine with the repair charges. Over all a fine call."
   },
   {
    "query": "Repair Charges Dispute",
    "score": 88,
    "ncf": false,
    "date": "16 Sep",
    "comment": "Cx had given a product for repair and the OB call was made to get the confirmation on the repair charges. Jc informed on the charges Failed to portray Empathy when necessary, Avoid overlapping, Be cautious about the greeting whether it's Evening/ Afternoon"
   },
   {
    "query": "Return Initiation / Request",
    "score": 100,
    "ncf": false,
    "date": "18 Sep",
    "comment": "LTE failed pick up and Cx said that she is willing to visit the store and poist exchange will purchase the product from the store itsself."
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "21 Sep",
    "comment": "The customer requested an order cancellation due to crafting delays. The JC successfully persuaded the customer to retain the funds as a profile credit, informing them it could also be redeemed in-store. The customer subsequently completed a store purchase using the credit GOOD JOB!"
   },
   {
    "query": "Order Cancellation",
    "score": 88,
    "ncf": false,
    "date": "21 Sep",
    "comment": "The customer called regarding a nose pin order, and the JC requested address proof to be uploaded via the app. Later, when the customer inquired about dispatch details,shold have shared clear info abt the delivery"
   },
   {
    "query": "Repair Charges Dispute",
    "score": 100,
    "ncf": false,
    "date": "21 Sep",
    "comment": "Cx is not fine with the repair charges, JC tried his best to inform the details of the repair charges but the Cx was not fine still. JC has kept the call on follow up."
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "22 Sep",
    "comment": "Retention customer requested an order cancellation due to a typo in the contact number. The JC successfully assisted by updating the number, allowing the customer to proceed with the order without canceling"
   },
   {
    "query": "Random",
    "score": 100,
    "ncf": false,
    "date": "25 Sep",
    "comment": "Revised audit"
   }
  ],
  "paramCaseMap": {
   "ss": [
    0,
    1,
    2,
    12,
    15,
    18
   ],
   "etq": [],
   "prob": [
    6,
    10
   ],
   "sol": [
    8,
    15,
    21
   ],
   "fu": [],
   "tag": []
  }
 },
 "dineshsr": {
  "name": "Dinesh_Sr",
  "initials": "DS",
  "color": "#0891b2",
  "cq": 94,
  "audits": 25,
  "ncf": 0,
  "totalErrors": 11,
  "params": {
   "ss": 4,
   "etq": 0,
   "prob": 1,
   "sol": 6,
   "fu": 0,
   "tag": 0
  },
  "aois": [
   {
    "cat": "sol",
    "label": "Solution & Rec.",
    "text": "Incomplete information flagged in 3 of 25 audits, for example on the Shaya Order Status / Tracking case (09 Sep). Close the information gap completely: share the full process, TAT and next steps, and address every point the customer raised."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 2 of 25 audits, for example on the Repair Request case (27 Aug). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   },
   {
    "cat": "sol",
    "label": "Solution & Rec.",
    "text": "Missed retention flagged in 2 of 25 audits, for example on the Shaya Order Status / Tracking case (21 Sep). Make a genuine retention attempt before processing cancellations or returns: pitch alternatives, exchanges or offers first."
   }
  ],
  "cases": [
   {
    "query": "Repair Request",
    "score": 88,
    "ncf": false,
    "date": "27 Aug",
    "comment": "JC has called the Cx for the Repair Charges and Cx was not fine with the charges and informed that she has already paid for the repair and JC was suppose to check the details and inform according but the Cx said that she will be calling back."
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "31 Aug",
    "comment": "Retention Call was made to inform the cx that during the invoicing it was observed that the barcode against his order was found to be damaged. JC communicated the required information trying to retain the cx by making him to visit the store. However as he required the refund to the source needful was done. Could try to use even more better phrase and communicate accurate timeline of the refund instead of only mentioning the timeline as 7-10 working days try mentioning additional timeline as pick up confirmation may take time."
   },
   {
    "query": "Repair Charges Dispute",
    "score": 100,
    "ncf": false,
    "date": "31 Aug",
    "comment": "Call was made to inform the repair charges Jc communicated the required information along with probing for confirmation as required and as cx requested for a CB post 10 min don't need to mention that would call after 30 min instead state that we would try to make you a call in next 10 to max. 30 min. Folow up CB was made and required information was updated in the sheet. (Timely apology, 8 jump rings padenge)"
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "31 Aug",
    "comment": "JC called the Cx for the Order cancellation and it was a short call and Cx asked to have the Order cancelled and Cx disconnected the call."
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "02 Sep",
    "comment": "Cancellation Call, Cx looks for different designs and wish to have the Order cancelled. Reteintion tried but Cx needs refund only since the Order was placed from her Brothers profile."
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "02 Sep",
    "comment": "Due to delay in delivery Cx wish to hav ethe Order Cancelled. Cx needs refund only and Retention tried but Cx is not fine with the profile balance."
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "02 Sep",
    "comment": "Cancellation Call, Cx didnt like the design. Cx needs refund only not to profile."
   },
   {
    "query": "Repair Request",
    "score": 100,
    "ncf": false,
    "date": "04 Sep",
    "comment": "Repair not possible case. Cx agreed for LTE and over all a fine call."
   },
   {
    "query": "Repair Charges Dispute",
    "score": 88,
    "ncf": false,
    "date": "07 Sep",
    "comment": "Repair Charges call, charges dispute. JC tried informing the details with the Cx but Cx was not fine and already an email is going on for the same and jC needs to check the same and work accordingly and caling Cx back to back wont work."
   },
   {
    "query": "Shaya Wrong product recieved",
    "score": 90,
    "ncf": false,
    "date": "08 Sep",
    "comment": "Retention Call was made to inform the cx that the order she had placed has a quality issue due to which the same order can't be dispatched. Post informing retainted the cx however avoid giving a direct option for refund. Missed to inform that the revised delivery date would reflect against the new order. (Damage ho chukka hai-better phrasing)"
   },
   {
    "query": "Order Cancellation",
    "score": 88,
    "ncf": false,
    "date": "09 Sep",
    "comment": "Due to delay in delivery Cx wish to have the Order cancelled and Cx needs refund only. Cx said that she has purchased the product already. Refund TAT informed. Need empathy."
   },
   {
    "query": "Shaya Order Status / Tracking",
    "score": 75,
    "ncf": false,
    "date": "09 Sep",
    "comment": "Call was made for the failed delivery of her order. Jc did the necessary probing and arranged for the re-dispatch Multiple overlapping, need to inform the approx. timeline for the delivery post re-dispatch (Better positive phrasing to be done - BOD)"
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "09 Sep",
    "comment": "Retention Cx had a cancellation request placed and call was amde for it. Jc had a check did the necessary probing trying to retain however as cx wanted to proceed with the cancellation needful was done. (Could have apologised by using better phrase to retain)"
   },
   {
    "query": "Document required",
    "score": 100,
    "ncf": false,
    "date": "10 Sep",
    "comment": "Call was made to get the ID proof from the cx against the GC order placed. Jc did the necessary probing by getting connected to the cx via WA. (I beleive it is in PDF format - Better phrasing)"
   },
   {
    "query": "Repair Request",
    "score": 100,
    "ncf": false,
    "date": "11 Sep",
    "comment": "cx product diamond fell in the store while clening. cx informed the charges will be borne by the store & the same was processed."
   },
   {
    "query": "Order Cancellation",
    "score": 75,
    "ncf": false,
    "date": "15 Sep",
    "comment": "Need ID Proof and the same is uploaded in PDF format and the same is not visible since JC informed that the same needs to be reuploaded but Cx was not okay with uploading the same again. cx wish to cancel the order. Order cancelled. Cx called us back for the refund update where as the JC missed to inform the same. Need to explian the Cx that PDF Format files cant been seen and we need in an normal file. BOD."
   },
   {
    "query": "Order Tracking / Status",
    "score": 88,
    "ncf": false,
    "date": "16 Sep",
    "comment": "Need ID Proof, JC Informed the reason for the ID Proof. Cx needs the delivery on the same day but the EDD was on 12th and it was delivered on 12th. Cx was not fine with the delivery delay but the EDD was on track. Need to use more positive phrases."
   },
   {
    "query": "Product Broken / Damaged",
    "score": 90,
    "ncf": false,
    "date": "17 Sep",
    "comment": "Retention Call was made to inform the cx that the order placed by her is found to be broken during invoicing and so we won't ne able to proceed with this order. Jc informed the required details however Instead of infomring about the refund could try once to pitch for retention (Timely apology)"
   },
   {
    "query": "Order Tracking / Status",
    "score": 100,
    "ncf": false,
    "date": "17 Sep",
    "comment": "Cx was made in regards with a PD hich was raised and answer for few qustions were required and so the call was made. H=Jc tried to have a check menawhile informing to keep the call on hold, later the call was disconnected but JC got in touch with the cx via WA resolving the issue"
   },
   {
    "query": "Repair Request",
    "score": 100,
    "ncf": false,
    "date": "21 Sep",
    "comment": "Repair Charges call, Cx was not fine with the charges. Break up of the charges has been informed. Cx was looking for exchange and informed tha last time repair was not well since Cx wish to go with LTE and product was sent back as per the CX wish."
   },
   {
    "query": "Shaya Order Status / Tracking",
    "score": 62,
    "ncf": false,
    "date": "21 Sep",
    "comment": "customer's order for the Torana Arch Earrings in Oxidised 925 Silver was canceled because the item was damaged at the factory and could not be fulfilled. The JC should have proactively suggested similar earrings or alternate designs within the same collection. Greater ownership and retention efforts were needed during the interaction"
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "21 Sep",
    "comment": "customer requested an order cancellation. The JC successfully assisted the customer in converting the amount into profile credit, which the customer subsequently used to complete a purchase in-store"
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "22 Sep",
    "comment": "Retention customer requested an order cancellation to purchase a different size. The JC successfully pitched converting the refund into a profile balance, which the customer then used to complete the new purchase."
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "22 Sep",
    "comment": "Retention cx wanted to cancel the order & buy something else. JC pitched for profile bal cx denied. avoid using too many sir on the call."
   },
   {
    "query": "Order Tracking / Status",
    "score": 100,
    "ncf": false,
    "date": "22 Sep",
    "comment": "Product has bene damaged and wont be able to dispatch the Order. Cx asked to place a New Order and delivery the Order. Approval taken and New order will be placed."
   }
  ],
  "paramCaseMap": {
   "ss": [
    0,
    10,
    11,
    16
   ],
   "etq": [],
   "prob": [
    20
   ],
   "sol": [
    8,
    9,
    11,
    15,
    17,
    20
   ],
   "fu": [],
   "tag": []
  }
 },
 "aqsaa": {
  "name": "Aqsa_A",
  "initials": "AA",
  "color": "#b8860b",
  "cq": 88,
  "audits": 25,
  "ncf": 0,
  "totalErrors": 18,
  "params": {
   "ss": 9,
   "etq": 1,
   "prob": 1,
   "sol": 6,
   "fu": 1,
   "tag": 0
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 5 of 25 audits, for example on the Repair Request case (22 Sep). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missing positive/ownership phrases flagged in 4 of 25 audits, for example on the Order Cancellation case (31 Aug). Use ownership phrases such as \"I will personally check this for you\" or \"Let me make sure this gets resolved\" instead of neutral or negative wording."
   },
   {
    "cat": "sol",
    "label": "Solution & Rec.",
    "text": "Missed retention flagged in 3 of 25 audits, for example on the Order Cancellation case (02 Sep). Make a genuine retention attempt before processing cancellations or returns: pitch alternatives, exchanges or offers first."
   }
  ],
  "cases": [
   {
    "query": "Order Tracking / Status",
    "score": 75,
    "ncf": false,
    "date": "27 Aug",
    "comment": "Call was made to inform the cx that under return we had received only 2 shaya bangles instead of 3. Jc did the necessary probing however missed to apologise as well as need to use better phrases during such scenario. Later a follow up call was made by Sanjana as per the update received"
   },
   {
    "query": "Repair Request",
    "score": 100,
    "ncf": false,
    "date": "31 Aug",
    "comment": "Recasting call and JC needs to be a littke more empathic on call. Cx was not fine with the charges and JC informed the details and finally Cx agreed for the charges."
   },
   {
    "query": "Order Cancellation",
    "score": 40,
    "ncf": false,
    "date": "31 Aug",
    "comment": "Retention Cx had a cancellation requst placed and contacted us for that. Jc tried to retain the however however later as she wanted to proceed with the cancellation needful was done. Delay in raising the refund due to tech issue observed - BOD for NCF Avoid overlappting / interupption, Need to use more of better phrase to retain the cx."
   },
   {
    "query": "Order Cancellation",
    "score": 94,
    "ncf": false,
    "date": "02 Sep",
    "comment": "Cx wish to have the Order Cancelled since she is planning to purchase in the month of Sep since her Bday is upcoming and JC missed to wish the Cx for Bday and profile balance suggeted but Cx needs refund only."
   },
   {
    "query": "Order Cancellation",
    "score": 88,
    "ncf": false,
    "date": "02 Sep",
    "comment": "ROS needs to be worked on, Cancellation call. SV suggested but Cx wish to have the Order cancelled and proceed with refund. Retention tried."
   },
   {
    "query": "Repair Status / Logistics",
    "score": 100,
    "ncf": false,
    "date": "02 Sep",
    "comment": "Repair Charges call, Over all the call was fine and Cx agreed for the repair charges."
   },
   {
    "query": "Order Cancellation",
    "score": 75,
    "ncf": false,
    "date": "02 Sep",
    "comment": "Cancellation call, JC informed that Order will be delivered as per the EDD and if the CX wants to have the Order cancelled the same can been, No Retention effort on call."
   },
   {
    "query": "Repair Request",
    "score": 100,
    "ncf": false,
    "date": "04 Sep",
    "comment": "Over all a fine call for repair."
   },
   {
    "query": "Shaya Product Quality Issue",
    "score": 100,
    "ncf": false,
    "date": "07 Sep",
    "comment": "Product has been broken SHAYA one and suggested Cx for some other designs and Cx needs refund only will make the purchase later."
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "09 Sep",
    "comment": "Cx has placed an Order for \" Puvvu Necklace in 925 Silver \" and the same has been stopped manufacturing and the one which was delivered is facing QC issue sibce cant been delivered and Cx needs refund and processd the refund."
   },
   {
    "query": "Repair Charges Dispute",
    "score": 90,
    "ncf": false,
    "date": "09 Sep",
    "comment": "Cx had given a product for repair and the OB call was made to get the confirmation on the repair charges. Jc informed on the charges and as cx felt the charges were high Jc tried to make the cx understand on it later informed to check on the exception possibilites and a Cb for it was done which was not connected so a SMS about it was sent. We willbe reparing the same need to be modified as the repair of this product is possible, Avoid repeating the same phrase, Avoid unnecessarily agreeing to the cx that defect aapke end se hai - Better phrasing need to be done"
   },
   {
    "query": "Order Tracking / Status",
    "score": 88,
    "ncf": false,
    "date": "09 Sep",
    "comment": "Call was made for the failed delivery of her order. Jc did the necessary probing and confirmed the alternative no. after which the product was successfully delivered on the same day. Could use more of better phrase, need to also mention the approx. delivery attempt timeline."
   },
   {
    "query": "Order Cancellation",
    "score": 88,
    "ncf": false,
    "date": "09 Sep",
    "comment": "Retention Cx had a cancellation request placed and call was amde for it. Jc had a check did the necessary probing and based on that retained the cx. Missed to apologise when required (Even more better phrasing to retain the cx can be done)"
   },
   {
    "query": "Order Tracking / Status",
    "score": 88,
    "ncf": false,
    "date": "09 Sep",
    "comment": "Call was made for the failed delivery of her order. Jc did the necessary probing and confirmed the alternative no. after which the product was successfully delivered on the same day. need to also mention the approx. delivery attempt timeline."
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "16 Sep",
    "comment": "Cancellation call, due to delay in delivery Cx wants to cancel the Order. Prce of te product has been increased now the Cx dont want the Order. Cx was facing issue in Order delivery and its getting delayed too. Orders cancelled and refund processed."
   },
   {
    "query": "Reverse pick up / delay",
    "score": 100,
    "ncf": false,
    "date": "16 Sep",
    "comment": "Call was made in regards with the pick up of the product Necessary probing was done and updated in the mail as well."
   },
   {
    "query": "Product Broken / Damaged",
    "score": 75,
    "ncf": false,
    "date": "17 Sep",
    "comment": "Retention Call was made to inform the cx that the order placed by her is found to be broken during invoicing and so we won't ne able to proceed with this order. Jc informed the required details however better phrasing could have been done and better efforts to retain the cx could have been made, Need to inform that only 1 bar code has the issue"
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "18 Sep",
    "comment": "Cancellation call and due to the size issue the Cx wish to have the Order cancelled. Retention tried but Cx needs refund only."
   },
   {
    "query": "Order Tracking / Status",
    "score": 88,
    "ncf": false,
    "date": "21 Sep",
    "comment": "Failed delivery call and Cx claims that she has not received any calls for the delivery and JC informed that she will check and make sure the Order delivery will be done asap. Need more empathy on cal since Vx was facing the Order delivery issue from a long time."
   },
   {
    "query": "Repair Request",
    "score": 100,
    "ncf": false,
    "date": "21 Sep",
    "comment": "JC explained the applicable repair charges to the customer, and the customer agreed to proceed with the repair"
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "21 Sep",
    "comment": "Cancellation request due to an EDD breach was turned around. The JC successfully persuaded the customer to accept the refund as profile credit valid for online & store purchases"
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "22 Sep",
    "comment": "Retention customer requested an order cancellation due to a delivery delay. The JC informed the customer that the order barcode was ready and promised to check if delivery was feasible soon, the same was delivered to cx. retained the cx from MB"
   },
   {
    "query": "Order Cancellation",
    "score": 88,
    "ncf": false,
    "date": "22 Sep",
    "comment": "Retention customer requested an order cancellation due to a delivery delay. The JC informed the customer that the order barcode was ready and promised to check if delivery was feasible; however, the agent failed to take the initiative to follow up after verifying the status. The interaction demonstrated a lack of ownership and missed an opportunity for customer retention"
   },
   {
    "query": "Repair Request",
    "score": 38,
    "ncf": false,
    "date": "22 Sep",
    "comment": "Broken product and JC informed regarding the Repair Charges and Cx was not fine with the charges. Recasting needs to be done and Cx claims that its an manufacturing issue. Store Team has updated in the comments that in the month of June the product was given for repair and the repair was nt done and returned back as it is and Cx claims that he was changed Rs. 840 / - and now he wont pay, JC has closed the KF stating that sent back as it is. Lack of apology and One View probing."
   },
   {
    "query": "Repair Charges",
    "score": 100,
    "ncf": false,
    "date": "25 Sep",
    "comment": "Revised audit - good work!!"
   }
  ],
  "paramCaseMap": {
   "ss": [
    0,
    2,
    4,
    6,
    10,
    11,
    12,
    18,
    23
   ],
   "etq": [
    3
   ],
   "prob": [
    23
   ],
   "sol": [
    2,
    6,
    13,
    16,
    22,
    23
   ],
   "fu": [
    2
   ],
   "tag": []
  }
 },
 "ankitaa": {
  "name": "Ankita_A",
  "initials": "AA",
  "color": "#db2777",
  "cq": 86,
  "audits": 25,
  "ncf": 1,
  "totalErrors": 21,
  "params": {
   "ss": 13,
   "etq": 2,
   "prob": 4,
   "sol": 1,
   "fu": 0,
   "tag": 1
  },
  "aois": [
   {
    "cat": "sol",
    "label": "Solution & Rec. · NCF",
    "text": "1 NCF this month on Order Tracking / Status. Before acting on the call, check the complete order, Oneview and any ongoing email or ticket, so the action you take and the timeline you give cover the full picture."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missing positive/ownership phrases flagged in 7 of 25 audits, for example on the Refund Status / Delay case (05 Sep). Use ownership phrases such as \"I will personally check this for you\" or \"Let me make sure this gets resolved\" instead of neutral or negative wording."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 5 of 25 audits, for example on the Refund Status / Delay case (05 Sep). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   }
  ],
  "cases": [
   {
    "query": "Order Tracking / Status",
    "score": 88,
    "ncf": false,
    "date": "27 Aug",
    "comment": "Cx has not received one of the Order placed, SKU: UE07183-YG0000, Cx informed to cancel the Order due to delay in delivery. Order has been dispatched via SPEED POST. JC checked and informed the details but Cx was irate and not allowing the JC to speak. Cx said that she will be returning the products back to CL. JC informed the details. JC was suppose to inform the CX that the dleiver date for the undelivered product is 09th Sep and its was already updated."
   },
   {
    "query": "Order Tracking / Status",
    "score": 88,
    "ncf": false,
    "date": "28 Aug",
    "comment": "Cx has placed an Order in Store and the same SKU has been discontinued now, Cx needs the same SKU at cost she has placed the product for her fiancÃ© and JC informed the Cx same to the Cx but the cx was irate and dropped an email for the same. Cx needs to speak with the senior and call back arranged for the same."
   },
   {
    "query": "Order Tracking / Status",
    "score": 0,
    "ncf": true,
    "date": "31 Aug",
    "comment": "Cx was facing a delay in the delivery of his order and so contacted us know the status of it. Jc Missed to check on the ongoing mail or ticket however informed that the delivery would be attempted in 24 hours of time hence NCF."
   },
   {
    "query": "Return Initiation / Request",
    "score": 81,
    "ncf": false,
    "date": "01 Sep",
    "comment": "Cx wish to return the product that she has purchases for SHAYA Product in buy 1 and get one, Retention tried but Cx needs MB only, probing on exchange needs to be done more, BOD. Greeting missed. Cx wish to have ony one SKU to be returned. Reason for return missed."
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "01 Sep",
    "comment": "Cancellation call, Retention tried but Cx needs refund only. Cx placed an New order."
   },
   {
    "query": "Order Tracking / Status",
    "score": 88,
    "ncf": false,
    "date": "01 Sep",
    "comment": "Failed Delivery call and its an Fake update from the Blue Dart Courier team. Over all call was fine but needs to seek apology for the mess happend for the Order delivery."
   },
   {
    "query": "Refund Status / Delay",
    "score": 75,
    "ncf": false,
    "date": "05 Sep",
    "comment": "Failed Pick up call, Cx informed that the pick up has bene done and its two weeks before and the refund is not yet done. JC checked for the AWB no and JC was suppose to inform the Cx that she will check on the same and will check for the refund asap and will process the same. BOD. Positive phrases missing."
   },
   {
    "query": "Repair Charges Dispute",
    "score": 75,
    "ncf": false,
    "date": "07 Sep",
    "comment": "Cx has given an product for repair and the same needs t be recasted and Cx is not fine with the repair charges and JC informed the details and later JC informed that she will check but no confirmation can been given. Cx said that he has meet with an accident and that y the same ha sbene happened, need to owe empathy but missed."
   },
   {
    "query": "Document required",
    "score": 88,
    "ncf": false,
    "date": "09 Sep",
    "comment": "Call was made to get the ID proof from the cx due to high risk alert received. Jc informed about it to the cx however as cx was not convenient to share it alternate option to share it via App was suggested. Could try using more on better ownership phrase to make the cx understand that it's not a scam Also could have mentioned that a mail for it from the official ID is been shard."
   },
   {
    "query": "Repair Status / Logistics",
    "score": 81,
    "ncf": false,
    "date": "09 Sep",
    "comment": "Cx had given a product for repair and the OB call was made to get the confirmation on the repair charges. Jc informed on the charges and as per the confirmation from the cx on it needful was done. Rate of speech was lil slow need to sound moderate, Avoid sounding confused, Don't wait for the cx to ask about the charges instead need to sound pro active, Failed to check further assistance (Avoid repetition of the same info when cx have already provided the confirmation)"
   },
   {
    "query": "Order Cancellation",
    "score": 94,
    "ncf": false,
    "date": "09 Sep",
    "comment": "Retention Cx had a cancellation request placed and call was amde for it. Jc had a check did the necessary probing trying to retain however as cx wanted to proceed with the cancellation needful was done. Incorrect Dispostions selected (Before call is dialed be ready with the data for which call is made)"
   },
   {
    "query": "Repair Charges Dispute",
    "score": 88,
    "ncf": false,
    "date": "09 Sep",
    "comment": "Cx had given a product for repair and the OB call was made to get the confirmation on the repair charges. Jc informed on the charges and intially cx felt the charges were high so better phrasing could have been done however later as per the confirmation from the cx on it needful was done. (Better way of apologising to be done when cx mentioned that the repair price is high, Need to use the word repair, resizing, Etc based on the scenario, avoid agreeingt to cx when she mentioned that repair timeline is too long, Repair timeline - BOD)"
   },
   {
    "query": "Order Cancellation",
    "score": 75,
    "ncf": false,
    "date": "09 Sep",
    "comment": "Call was made for the failed delivery of her order. JC did the necessary probing were better alternate phrasing could have been used. Later as cx wanted to proceed with the cancellation needful was done Could have probed for cx's current location so that we could try dispatching the product towards that location"
   },
   {
    "query": "Repair Charges Dispute",
    "score": 88,
    "ncf": false,
    "date": "11 Sep",
    "comment": "Cx has given an product for repair and the same needs t be recasted and Cx is not fine with the repair charges and JC informed the details and later JC informed that she will check but no confirmation can been given. Cx said that he has meet with an accident and that y the same ha sbene happened, need to owe empathy but missed."
   },
   {
    "query": "Delivery related",
    "score": 100,
    "ncf": false,
    "date": "11 Sep",
    "comment": "Cx repair charges were explined, cx wanted to check & confirm requested for a call back. Later cx was not responding."
   },
   {
    "query": "Order Tracking / Status",
    "score": 88,
    "ncf": false,
    "date": "15 Sep",
    "comment": "Cx has received an WRONG SHAYA PRODUCT and JC checked the details with the Cx. Probing was done. Cx said that the delivery was received in an proper condition. Return has been raised already for the Order and JC missed to check the details. PD Call, BOD."
   },
   {
    "query": "Order Cancellation",
    "score": 88,
    "ncf": false,
    "date": "16 Sep",
    "comment": "Cancellation call and due to delay in delivery Cx wish to hav ethe Order cancelled. # X0B0A875 cancelled and refund processed. Retention tried but Cx needs refund ony. TAT for refund informed. Empathy on call needs to be here on call."
   },
   {
    "query": "Order Cancellation",
    "score": 88,
    "ncf": false,
    "date": "16 Sep",
    "comment": "Retention Cx had a cancellation request placed and call was amde for it. Jc had a check did the necessary probing trying to retain however as cx wanted to proceed with the cancellation needful was done. Try using more of positive phrase as well as rather than mentioning that refund would take longer time mention the approx. timeline for better clarity"
   },
   {
    "query": "Order Cancellation",
    "score": 88,
    "ncf": false,
    "date": "16 Sep",
    "comment": "Retention Cx had a cancellation request placed and call was amde for it. Jc had a check did the necessary probing trying to retain however as cx wanted to proceed with the cancellation needful was done. Irrelevant probing done - Would you still like to proceed with the order"
   },
   {
    "query": "Repair Request",
    "score": 100,
    "ncf": false,
    "date": "21 Sep",
    "comment": "Repaire Charges call nd Cx said that she will be visiting the store and confirm the same. JC was in foillow up with the CX and over all a fine call. Cx called to IB and confirmed the repair charges."
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "22 Sep",
    "comment": "Retention \"The customer initially requested an order cancellation; however, the JC successfully persuaded them to accept delivery, and the order was completed"
   },
   {
    "query": "Order Cancellation",
    "score": 88,
    "ncf": false,
    "date": "22 Sep",
    "comment": "Cancellation call, Cx was looking for refund to source, Retentioin tried but Cx MB only. JC needs to avoide multiple calls to the Cx BOD, sinec Cx was also confused on call. C SAT was pitched on forst call without proving any resolution to the Cx. BOD."
   },
   {
    "query": "Random",
    "score": 100,
    "ncf": false,
    "date": "25 Sep",
    "comment": "Good work (Revised audit)"
   },
   {
    "query": "Random",
    "score": 100,
    "ncf": false,
    "date": "25 Sep",
    "comment": "Revised BOD"
   },
   {
    "query": "Random",
    "score": 100,
    "ncf": false,
    "date": "25 Sep",
    "comment": "Revised BOD"
   }
  ],
  "paramCaseMap": {
   "ss": [
    1,
    3,
    5,
    6,
    7,
    8,
    9,
    11,
    12,
    13,
    16,
    17,
    21
   ],
   "etq": [
    3,
    9
   ],
   "prob": [
    0,
    12,
    15,
    18
   ],
   "sol": [
    2
   ],
   "fu": [],
   "tag": [
    10
   ]
  }
 },
 "oindrillad": {
  "name": "Oindrilla_D",
  "initials": "OD",
  "color": "#16a34a",
  "cq": 85,
  "audits": 25,
  "ncf": 0,
  "totalErrors": 24,
  "params": {
   "ss": 15,
   "etq": 0,
   "prob": 6,
   "sol": 3,
   "fu": 0,
   "tag": 0
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 6 of 25 audits, for example on the Order Tracking / Status case (17 Sep). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missing positive/ownership phrases flagged in 5 of 25 audits, for example on the Repair Charges Dispute case (21 Sep). Use ownership phrases such as \"I will personally check this for you\" or \"Let me make sure this gets resolved\" instead of neutral or negative wording."
   },
   {
    "cat": "prob",
    "label": "Probing",
    "text": "Irrelevant or insufficient probing flagged in 4 of 25 audits, for example on the Repair Charges Dispute case (21 Sep). Probe with purpose: ask the questions that confirm the order, the exact concern and what the customer expects before giving a resolution."
   }
  ],
  "cases": [
   {
    "query": "Order Cancellation",
    "score": 88,
    "ncf": false,
    "date": "27 Aug",
    "comment": "Order Cancelled and due to delay in delivery Cx wish the Order cancelled. Retention tried but Cx needs SHAYA product and the stores are not available. Since the same SKU is not available in the store JC cancelled the Orderr refund TAT informed. Since its an gift order and its getting delayed Cx wish to cancel and JC was suppose to owe an apology on call."
   },
   {
    "query": "Order Cancellation",
    "score": 75,
    "ncf": false,
    "date": "31 Aug",
    "comment": "Retention Cx had a cancellation request placed and call was made for it. Jc did the necessary probing, trying to retain the cx however later as cx wanted to proceed with the cancellation needful was done. Initially could have once checked the issue raised by the cx for the cancellation and this way could have tried to retain her better. As well as need to use better phrase when cx mentioned about her issue as well as which company calls for the cancellation"
   },
   {
    "query": "Shaya Wrong product recieved",
    "score": 90,
    "ncf": false,
    "date": "31 Aug",
    "comment": "Call was made as cx claimed incorrect product was received. JC apologised did the necessary probing as well as updated the cx's response in the sheet. Accurate probing in regards with the order ID could have been done. Also try to sound clear in regards with the concern"
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "02 Sep",
    "comment": "Cancellation call, due to delay in delivery Cx wish to visit the store and place the Order, Cx needs refund only Retention tried."
   },
   {
    "query": "General Policy Query",
    "score": 88,
    "ncf": false,
    "date": "02 Sep",
    "comment": "JC has called the Cx for the ID Proof and its an GOLD COIN order and JC informed the Cx to upload the ID Proof but also was to inform the once the ID proof is uploaded only the Order will be dispatched and delivered."
   },
   {
    "query": "Order Cancellation",
    "score": 62,
    "ncf": false,
    "date": "02 Sep",
    "comment": "Cancellation call, Cx wish to have the Order cancelled since she dnt want the Order. Need more Retention effort on call. Cx wish to cancel other Orders too."
   },
   {
    "query": "Order Cancellation",
    "score": 88,
    "ncf": false,
    "date": "02 Sep",
    "comment": "Cancellation call, due to pricing issue Cx wants to continue with the Order, there was some price issue thats the reason she has raised for an Cancellation but now Cx wants to go with the Order. Need to seek apology on call for the mes faced by the Cx."
   },
   {
    "query": "Repair Request",
    "score": 88,
    "ncf": false,
    "date": "04 Sep",
    "comment": "Repair Charges call. over all fine call. Cx was asking that for an year repair will be free and JC informed the details but needs to be a little more clear ad sessk apology for the same."
   },
   {
    "query": "Repair Charges Dispute",
    "score": 88,
    "ncf": false,
    "date": "07 Sep",
    "comment": "Cx has given an product for repair and she is not fine in paying the charges for the same and JC needs to make the Cx understand why the charges are charged for and JC informed that she will be checking with the back end will get back due to no response JC has shared an SMS that the charges will be applicable if Cx is not find the same can opt for LTE or LTB."
   },
   {
    "query": "Order Tracking / Status",
    "score": 100,
    "ncf": false,
    "date": "09 Sep",
    "comment": "Over all a good Retention call."
   },
   {
    "query": "Repair Status / Logistics",
    "score": 88,
    "ncf": false,
    "date": "10 Sep",
    "comment": "Cx had given a product for repair and the OB call was made to get the confirmation on the repair charges. Jc informed on the charges and cx mentioned that she has already approved it so better phrasing could have been done"
   },
   {
    "query": "Order Cancellation",
    "score": 88,
    "ncf": false,
    "date": "10 Sep",
    "comment": "Retention Cx had a cancellation request placed and call was amde for it. Jc had a check did the necessary probing and based on that retained the cx. Avoid mentioning directly that refund takes longer time better phrasing to be done"
   },
   {
    "query": "Order Cancellation",
    "score": 88,
    "ncf": false,
    "date": "10 Sep",
    "comment": "Retention Cx had a cancellation request placed and call was amde for it. Jc had a check did the necessary probing trying to retain however as cx wanted to proceed with the cancellation needful was done. Better phrasing to retain the cx can be made"
   },
   {
    "query": "Repair Status / Logistics",
    "score": 100,
    "ncf": false,
    "date": "10 Sep",
    "comment": "Cx had given a product for repair and the OB call was made to get the confirmation on the repair charges. Jc informed on the charges and as per the confirmation from the cx on it needful was done."
   },
   {
    "query": "Repair Request",
    "score": 75,
    "ncf": false,
    "date": "11 Sep",
    "comment": "repair charges were explined to cx, she asked to call back after some time, JC informed she will not be available & asked cx to call IB. which was not right. should have informed to call by 8 before leving or told cx that she will call her next day. pushing cx to dial IB is wrong."
   },
   {
    "query": "Repair Status / Logistics",
    "score": 88,
    "ncf": false,
    "date": "15 Sep",
    "comment": "Repair Charges call and Cx wish to increase the length of the product and how many links needs to be added is misse dto inform and JC checked with the Cx and Cx needs to make the product to 18 inchs and cx needs the repair to be done asap and repair to be completed. TAT informed. JC needs to seek apology on behalf of the Store."
   },
   {
    "query": "Repair Charges Dispute",
    "score": 88,
    "ncf": false,
    "date": "16 Sep",
    "comment": "Repair Charges call, CX said that she was not informed on the charges and JC informed the details of the charges. Break up of the repair charges needs to be informed before the cx asks us. Cx said that she will check and get back to us."
   },
   {
    "query": "Order Tracking / Status",
    "score": 83,
    "ncf": false,
    "date": "17 Sep",
    "comment": "Call was made for the failed delivery of her order. Jc did the necessary probing however could have apologised later the call was disconnected. CB done - No response"
   },
   {
    "query": "Order Cancellation",
    "score": 88,
    "ncf": false,
    "date": "17 Sep",
    "comment": "Retention Call was made to inform the cx that the order placed by her is found to be broken during invoicing and so we won't ne able to proceed with this order. Jc informed the required details however as cx wanted to proceed with the cancellation needful was done. Failed to portray Empathy when necessary, Initially Failed to communicate in preferred language - BOD"
   },
   {
    "query": "Order Cancellation",
    "score": 88,
    "ncf": false,
    "date": "18 Sep",
    "comment": "Cancellation call, Cx wish to have the Order cancelled and proceed with the refund since she has almost the similar product or design with her and JC needs to work on Retention more."
   },
   {
    "query": "Repair Charges Dispute",
    "score": 62,
    "ncf": false,
    "date": "21 Sep",
    "comment": "Repair Charges call and cx was not fine with the repair charges and JC informed the details of the Cx charges but Cx said that she was not informed on the charges and will check with the store and will get back. Repair product was sent back since Cx is not fine with the repair charges. Need to make the Cx understand why the charges are charged for and JC needs to be a little more polite on call and Tone needs to be worked on."
   },
   {
    "query": "Repair Charges Dispute",
    "score": 75,
    "ncf": false,
    "date": "21 Sep",
    "comment": "customer expressed strong dissatisfaction regarding a product quality issue, stating that purchasing such a high-value item left them feeling misled. The JC should have de-escalated the situation with greater empathy, as the interaction lacked a customer-centric approach."
   },
   {
    "query": "Order Cancellation",
    "score": 62,
    "ncf": false,
    "date": "21 Sep",
    "comment": "Retention customer wished to cancel an existing order to purchase a different item. The JC advised transferring the funds to their profile balance, to which the customer initially hesitated but ultimately agreed. However, the JC failed to explain how or where the customer could locate and apply this balance toward a new order. Consequently, the customer had to call inbound support and clarify the same due to difficulty later demanded for MB"
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "22 Sep",
    "comment": "Retention customer initially requested an order cancellation; however, the JC effectively persuaded them to retain the order by confirming the order will be delivered next day.& retained the cx."
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "22 Sep",
    "comment": "Retention customer initially requested an order cancellation; however, the JC effectively persuaded them to retain the order by updating the delivery location from Bangalore to Ahmedabad. Great job on the successful retention"
   }
  ],
  "paramCaseMap": {
   "ss": [
    0,
    1,
    5,
    6,
    7,
    10,
    11,
    12,
    14,
    15,
    17,
    18,
    20,
    21,
    22
   ],
   "etq": [],
   "prob": [
    1,
    2,
    4,
    8,
    16,
    20
   ],
   "sol": [
    5,
    19,
    22
   ],
   "fu": [],
   "tag": []
  }
 },
 "surbhia": {
  "name": "Surbhi_A",
  "initials": "SA",
  "color": "#ea580c",
  "cq": 82,
  "audits": 25,
  "ncf": 1,
  "totalErrors": 24,
  "params": {
   "ss": 13,
   "etq": 2,
   "prob": 0,
   "sol": 6,
   "fu": 2,
   "tag": 1
  },
  "aois": [
   {
    "cat": "sol",
    "label": "Solution & Rec. · NCF",
    "text": "1 NCF this month on Order Cancellation. Before acting on the call, check the complete order, Oneview and any ongoing email or ticket, so the action you take and the timeline you give cover the full picture."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 7 of 25 audits, for example on the Repair Charges Dispute case (09 Sep). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Monotonous or dragging delivery flagged in 4 of 25 audits, for example on the Repair Charges Dispute case (17 Sep). Bring energy and variation into your voice. A flat or dragging delivery reads as disinterest even when the resolution is right."
   }
  ],
  "cases": [
   {
    "query": "Shaya Product Quality Issue",
    "score": 88,
    "ncf": false,
    "date": "27 Aug",
    "comment": "SHAYA order ad the product has been broken and we cant able to dispatch and delivery the Order. Cx was unhappy with the same because the Cx was facing the issue for the 2nd time and New Order has bene placed post the confirmation received from the Cx but teh Old Order was to be marked RTO missed and Cx was asking for the delivery update on her another order JC missed to share the upate. Tagging was to be done in Postsale."
   },
   {
    "query": "Repair Charges Dispute",
    "score": 75,
    "ncf": false,
    "date": "01 Sep",
    "comment": "Cx had given a product for repair and the OB call was made to get the confirmation on the repair charges. Jc informed on the charges and as per the confirmation given needful was done. However Timely apology required, Tone reflected to fumble indtead need to sound more confident as well as better clarity with in regards with explaining the recasting process was to be done."
   },
   {
    "query": "Repair Charges Dispute",
    "score": 80,
    "ncf": false,
    "date": "01 Sep",
    "comment": "Cx had given 3 products for repair and the OB call was made to get the confirmation on the repair charges. Jc informed on the charges, Required probing done and as informed by the cx needful for both the product was done Timely apology missed, Avoid overlapping, Avoid using the exact same phrase - recevied screw was fake, In regards with the update on the 3rd products repair was missed. (Always need to be ready with the data before making a OB call to the cx)"
   },
   {
    "query": "Order Cancellation",
    "score": 81,
    "ncf": false,
    "date": "02 Sep",
    "comment": "Cancellation call, Greeting missed and no Retention efforts on call and CX needs refund and order cancelled."
   },
   {
    "query": "Order Cancellation",
    "score": 88,
    "ncf": false,
    "date": "02 Sep",
    "comment": "Cancellation call, due to delay in delivery Cx wish to have the Order cancelled and its an MTO order. Cx was looking for the delivery on the next day of the Order placed. Retention is tried but Cx needs to check the product size and place the Order from the store. Dead Air needs to be avoided."
   },
   {
    "query": "Order Cancellation",
    "score": 88,
    "ncf": false,
    "date": "02 Sep",
    "comment": "Cancellation requested by Cx, Cx is getting back to back to back calls for the Order ad Cx wish to have the Order cancelled and she needs the refund to be processed. TAT informed and Retention tried but Cx needs refund only. Cx is irritated and need more apology."
   },
   {
    "query": "Order Cancellation",
    "score": 0,
    "ncf": true,
    "date": "02 Sep",
    "comment": "Cancellation requested, Cx was not happy with the product and Cx likes to visit the store shortly. Profile balance informed but Cx needs refund only. Cx has two skus placed and needs the both to be cancelled and proceed with teh refund jC has raised the KF for 1 sku and missed the other one."
   },
   {
    "query": "Repair Charges Dispute",
    "score": 100,
    "ncf": false,
    "date": "05 Sep",
    "comment": "Repair Charges call and Cx was not fine with the repair charges and JC checked and JC called back the Cx and informed that the repair charges has been waived off."
   },
   {
    "query": "Order Cancellation",
    "score": 88,
    "ncf": false,
    "date": "07 Sep",
    "comment": "Due to delay in delivery Cx wish to have the Order cancelled. MTO order and EDD informed. Need apology for the same happened. Order cancelled and refund raised."
   },
   {
    "query": "Repair Charges Dispute",
    "score": 40,
    "ncf": false,
    "date": "09 Sep",
    "comment": "Repair Charges call, Cx is not fine with the delay happened and Cx has used the TC in placing the store in store and now he needs the refun dof the same not the Order tio be proecssed or repaird for resizing and VCx was irate regardun the delay hapened. JC informe dthe details and email going for the same. JC needs use more apology an dempathy on call. Call was disconnected and jC was suppose to call the Cx back, BOD."
   },
   {
    "query": "Repair Charges Dispute",
    "score": 75,
    "ncf": false,
    "date": "10 Sep",
    "comment": "Cx had given a product for repair and the OB call was made to get the confirmation on the repair charges. Jc informed on the charges however Sounded Monotonous need to acknowledge what cx had mentioned and proceed with the query further. Missed to apologise as well."
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "10 Sep",
    "comment": "Retention Cx had a cancellation request placed and call was made for it. Jc did the necessary probing and retained the cx. (U feel the same wasn't required to be mentioned, Better pitch for Wow could have been made, Also missed to pitch for the IVR correctly)"
   },
   {
    "query": "Order Cancellation",
    "score": 88,
    "ncf": false,
    "date": "10 Sep",
    "comment": "Retention Call was made to inform the cx that the order placed by her is not available in our inventory so how would she like to procees. Jc informed the required details however better phrasing could have been done and better efforts to retain the cx could have been made. Avvoid overlapping"
   },
   {
    "query": "Repair Status / Logistics",
    "score": 88,
    "ncf": false,
    "date": "10 Sep",
    "comment": "Cx had given a product for repair and the OB call was made to get the confirmation on the repair charges. Jc informed on the charges however Sounded Monotonous, rate of speech was high, Could work on listening skill Need to sound clear with every word"
   },
   {
    "query": "Repair Request",
    "score": 88,
    "ncf": false,
    "date": "11 Sep",
    "comment": "Cx bracelet broke & the charges were explined to cx. Avoid repeting sir multiple time."
   },
   {
    "query": "Shaya Product Quality Issue",
    "score": 75,
    "ncf": false,
    "date": "15 Sep",
    "comment": "JC informed the Cx that the SHAYA product cant been dispatched due to manufacturing issue and QC related issue, since we vcant delivery the Order and Cx can opt for oter designs. Cx needs refund only and JC tried for Retention but Cx needs refund only, Ordrr cancelled and TAT informed. No empathy on call. Tone needs to be a little more polite and need more retention effort on call, BOD."
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "16 Sep",
    "comment": "Cancellation call, Cx said that he has received calls for the same ut Order is not cancelled and Cx needs the refund asap and not interested in any purchase now. Retention tried by JC."
   },
   {
    "query": "Order Cancellation",
    "score": 88,
    "ncf": false,
    "date": "17 Sep",
    "comment": "Retention Cx had a cancellation request placed and call was amde for it. Jc had a check did the necessary probing trying to retain however as cx wanted to proceed with the cancellation needful was done. Failed to portray Empathy when necessary (Need to check and inform the reason for revision in the delivery date (Avoid long hold, Avoid overlapping)"
   },
   {
    "query": "Repair Charges Dispute",
    "score": 69,
    "ncf": false,
    "date": "17 Sep",
    "comment": "Cx had given a product for repair and the OB call was made to get the confirmation on the repair charges. Jc informed on the charges however Sounded Monotonous, A reference pic from teh website could have been sent Failed to check further assistance"
   },
   {
    "query": "Order Cancellation",
    "score": 88,
    "ncf": false,
    "date": "18 Sep",
    "comment": "Cancellation call and JC tried for Retention but Cx needs MB only and Order has bene cancelled and refund processed."
   },
   {
    "query": "Repair Request",
    "score": 100,
    "ncf": false,
    "date": "21 Sep",
    "comment": "Repair Charges call, break up on the charges shared to the Cx. TAT informed."
   },
   {
    "query": "Repair Charges Dispute",
    "score": 100,
    "ncf": false,
    "date": "21 Sep",
    "comment": "JC contacted the customer regarding a repair charges. While the customer initially expressed hesitation over paying the making charges, the JC clearly explained the company policy, and the customer ultimately agreed to proceed"
   },
   {
    "query": "Order Cancellation",
    "score": 88,
    "ncf": false,
    "date": "21 Sep",
    "comment": "explin the entire policy to cx where he can find the amt in for future purchase. this will help in reducing the repet call back."
   },
   {
    "query": "Order Cancellation",
    "score": 80,
    "ncf": false,
    "date": "22 Sep",
    "comment": "Retention customer requested an order cancellation due to a missed (EDD). Although the JC promised to verify the status and call back within 24â€“48 hours, no follow-up was conducted or recorded. Subsequently, another JC called the customer without any context or internal call notes."
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "22 Sep",
    "comment": "Retention Polite & Professional \"The customer initially requested an order cancellation; however, the JC explained that because the order was originally placed using a profile balance, the refunded amount would be returned directly to her profile balance. The customer agreed"
   }
  ],
  "paramCaseMap": {
   "ss": [
    1,
    2,
    4,
    5,
    8,
    9,
    10,
    12,
    13,
    14,
    15,
    17,
    18
   ],
   "etq": [
    3,
    18
   ],
   "prob": [],
   "sol": [
    3,
    6,
    9,
    18,
    19,
    22
   ],
   "fu": [
    9,
    23
   ],
   "tag": [
    0
   ]
  }
 }
};
const PARAM_LABELS = {"ss": "Soft Skills", "etq": "Etiquette", "prob": "Probing", "sol": "Solution & Rec.", "fu": "Follow Up", "tag": "Tagging"};
const PARAM_SHORT = {"ss": "Soft Skills", "etq": "Etiquette", "prob": "Probing", "sol": "Solution", "fu": "Follow Up", "tag": "Tagging"};
const PARAM_COLORS = {"ss": "#ea580c", "etq": "#db2777", "prob": "#2563eb", "sol": "#dc2626", "fu": "#16a34a", "tag": "#7c3aed"};
