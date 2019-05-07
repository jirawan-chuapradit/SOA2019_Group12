*** settings ***
Library  SeleniumLibrary

*** Variable ***

*** Test Cases ***
ดูบทความที่หน้า Home
    ไปยังหน้า Home
    ต้องเจอบทความล่าสุด 3 บทความ
    
# ค้นหาบทความจากชื่อวิชา
#     ไปยังหน้า Home
#     เลือกวิชา

*** Keywords ***

# เลือกวิชา
#     Click Element  xpath://*[@id="root"]/div/div[1]/nav/ul/li[4]
#     Select From List By Value  id="subject" "DEVELOPMENT OF READING AND WRITING SKILLS IN ENGLISH"

ต้องเจอบทความล่าสุด 3 บทความ
    ${count}=  Get Element Count  xpath://*[@id="about"]/div[2]/div
    Should Be True  ${count} >= 1

# ต้องเจอข้อมูลในหน้าแรกจำนวน 10 เรื่อง
#     ${count}=  Get Element Count  xpath://div/div/article
#     Should Be True  ${count} >= 1

    # Wait Until Element Contains  xpath://div/div/article
    #wait 5 sec if not found error
    # Page Should Contain Element  xpath://div/div/article  limit=10

# ค้นหาข้อมูลคำว่าสอบ
#     Click Element  xpath://div/div[2]/span[1]/a[1]
#     Input Text  name:s  สอบ
#     Press Keys  None  RETURN

ไปยังหน้า Home 
    Open Browser  http://35.247.168.170:3000/  browser=chrome
    # Maximize Browser Window


    