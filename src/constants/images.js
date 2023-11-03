

const imageUrls = [
    "https://www.reliancedigital.in/medias/Apple-MLPH3HN-A-SmartPhones-491997703-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMjc0ODh8aW1hZ2UvanBlZ3xpbWFnZXMvaDQxL2hlNi85ODc4MDkyMDU0NTU4LmpwZ3wyNTU3MDU2OTJhMmJhNGViZGQxOGQzNTBjYWQ0NDc0ODgzMDA2MDdkMGI5ZjI0ZmI3MGMzYmNmYjg3YzFmYTBh",
    'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1680030998.0464825!380x380.jpg',
    'https://i02.appmifile.com/373_operatorx_operatorx_opx/10/05/2023/657e399a69e188fb194c3804f33fb67d!380x380.png',
   'https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1677136564513/61700a6c726f389ef4ae2b1662ce6783.png',
    'https://www.reliancedigital.in/medias/Vivo-Y22-Mobile-Phone-493177660-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w4MDM0OXxpbWFnZS9qcGVnfGltYWdlcy9oNjIvaDljLzk4OTQ2MDI2MzczNDIuanBnfGQwYWIxNmE0MWMzNTQzMzhmNTQyZjRkNzZiYTZmMzljNzY1N2FlYjExOWQ5MmJhOTM1NGM3ZWM2MDMxYzJjYzI',
    'https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1683687278376/b03d9cc23cc54795104b609bd32117f2.png',
    "https://www.reliancedigital.in/medias/Apple-MLPH3HN-A-SmartPhones-491997703-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMjc0ODh8aW1hZ2UvanBlZ3xpbWFnZXMvaDQxL2hlNi85ODc4MDkyMDU0NTU4LmpwZ3wyNTU3MDU2OTJhMmJhNGViZGQxOGQzNTBjYWQ0NDc0ODgzMDA2MDdkMGI5ZjI0ZmI3MGMzYmNmYjg3YzFmYTBh",
    'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1680030998.0464825!380x380.jpg',
    'https://i02.appmifile.com/373_operatorx_operatorx_opx/10/05/2023/657e399a69e188fb194c3804f33fb67d!380x380.png',
   'https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1677136564513/61700a6c726f389ef4ae2b1662ce6783.png',
    'https://www.reliancedigital.in/medias/Vivo-Y22-Mobile-Phone-493177660-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w4MDM0OXxpbWFnZS9qcGVnfGltYWdlcy9oNjIvaDljLzk4OTQ2MDI2MzczNDIuanBnfGQwYWIxNmE0MWMzNTQzMzhmNTQyZjRkNzZiYTZmMzljNzY1N2FlYjExOWQ5MmJhOTM1NGM3ZWM2MDMxYzJjYzI',
    'https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1683687278376/b03d9cc23cc54795104b609bd32117f2.png',
    "https://www.reliancedigital.in/medias/Apple-MLPH3HN-A-SmartPhones-491997703-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMjc0ODh8aW1hZ2UvanBlZ3xpbWFnZXMvaDQxL2hlNi85ODc4MDkyMDU0NTU4LmpwZ3wyNTU3MDU2OTJhMmJhNGViZGQxOGQzNTBjYWQ0NDc0ODgzMDA2MDdkMGI5ZjI0ZmI3MGMzYmNmYjg3YzFmYTBh",
    'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1680030998.0464825!380x380.jpg',
    'https://i02.appmifile.com/373_operatorx_operatorx_opx/10/05/2023/657e399a69e188fb194c3804f33fb67d!380x380.png',
   'https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1677136564513/61700a6c726f389ef4ae2b1662ce6783.png',
    'https://www.reliancedigital.in/medias/Vivo-Y22-Mobile-Phone-493177660-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w4MDM0OXxpbWFnZS9qcGVnfGltYWdlcy9oNjIvaDljLzk4OTQ2MDI2MzczNDIuanBnfGQwYWIxNmE0MWMzNTQzMzhmNTQyZjRkNzZiYTZmMzljNzY1N2FlYjExOWQ5MmJhOTM1NGM3ZWM2MDMxYzJjYzI',
    'https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1683687278376/b03d9cc23cc54795104b609bd32117f2.png',
    "https://www.reliancedigital.in/medias/Apple-MLPH3HN-A-SmartPhones-491997703-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMjc0ODh8aW1hZ2UvanBlZ3xpbWFnZXMvaDQxL2hlNi85ODc4MDkyMDU0NTU4LmpwZ3wyNTU3MDU2OTJhMmJhNGViZGQxOGQzNTBjYWQ0NDc0ODgzMDA2MDdkMGI5ZjI0ZmI3MGMzYmNmYjg3YzFmYTBh",
    'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1680030998.0464825!380x380.jpg',
    'https://i02.appmifile.com/373_operatorx_operatorx_opx/10/05/2023/657e399a69e188fb194c3804f33fb67d!380x380.png',
   'https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1677136564513/61700a6c726f389ef4ae2b1662ce6783.png',
    'https://www.reliancedigital.in/medias/Vivo-Y22-Mobile-Phone-493177660-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w4MDM0OXxpbWFnZS9qcGVnfGltYWdlcy9oNjIvaDljLzk4OTQ2MDI2MzczNDIuanBnfGQwYWIxNmE0MWMzNTQzMzhmNTQyZjRkNzZiYTZmMzljNzY1N2FlYjExOWQ5MmJhOTM1NGM3ZWM2MDMxYzJjYzI',
    'https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1683687278376/b03d9cc23cc54795104b609bd32117f2.png',
  ];
 
export default imageUrls