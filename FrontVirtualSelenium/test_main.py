#from .main import app

#from selenium import webdriver
#from selenium.webdriver import Keys
#from selenium.webdriver.firefox.service.Service import Services as FirefoxWebService
#from selenium.webdriver.GeckoDriver.service import Services as FirefoxWebService
#from webdriver_manager.firefox




from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.service import Service
#from selenium.webdriver.firefox.service import Service as FirefoxWebService
from webdriver_manager.firefox import GeckoDriverManager # type: ignore
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC



import requests 

import time



 # def getAIWriting(input):
    # result = ""
    # try:
        # sleep = 5
        
        # cargo = cargoPost.nombre_cargo #os.environ.get('username')
        # salario = cargoPost.salario #os.environ.get('password')

        # url = 'http://localhost:3000'
        # # options = Options()
        # # options.add_argument(
        # #     "user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36")
        # # options.add_argument("--headless")
        # # browser = webdriver.Chrome(options=options)
        # #
        # browser.get(url)
        # time.sleep(2.5)
        # # login
        # cargoFront = browser.find_element_by_id('nombre_cargo')
        # cargoFront.send_keys(cargo)

        # salarioFront = browser.find_element_by_id('salario')
        # pass_text.send_keys(salario)
        # submit_xpath: str = '//button[@type="submit"]'
        # button_xpath: str = '//button[@type="button"]'

        # login_btns = browser.find_elements_by_xpath(submit_xpath)

        # for login_btn in login_btns:
            # if (login_btn.text == "Sign in"):
                # login_btn.click()

        # time.sleep(2.5)

        # # select template

        # bio_url = 'https://app.conversion.ai/templates/view/2b38fa60-e113-4e82-9c85-0f9e179d80b3'

        # TOV = 'Witty'
        # POV = 'First Person'

        # browser.get(bio_url)
        # time.sleep(2.5)

        # # input
        # # clean input
        # generate_btns = browser.find_elements_by_xpath(button_xpath)

        # for clean_input_btn in generate_btns:
            # if (clean_input_btn.text == "Clear inputs"):
                # clean_input_btn.click()

        # time.sleep(0.3)
        # personalInformation = browser.find_element_by_id('personalInformation')
        # personalInformation.send_keys(input)
        # time.sleep(0.3)
        # tone = browser.find_element_by_id('tone')
        # tone.send_keys(TOV)
        # time.sleep(0.3)
        # pointOfView = browser.find_element_by_id('pointOfView')
        # pointOfView.send_keys(POV)
        # time.sleep(0.3)
        # # generate
        # generate_btns = browser.find_elements_by_xpath(submit_xpath)

        # for generate_btn in generate_btns:
            # if (generate_btn.text == "Generate"):
                # generate_btn.click()
        # time.sleep(sleep)
        # time.sleep(4)
        # # time.sleep(sleep)
        # # output
        # outputs = browser.find_elements_by_css_selector('pre')

        # for output in outputs:
            # print(output.text)
            # result += output.text + '\n\n'

        # browser.close()
    # except Exception as e:
        # browser.quit()
        # print("Exception occurred:{}".format(e))

    # return result
    
#appTest = TestClient(app)
 


def test_insert_user(): 
    
    driver = webdriver.Firefox(service=Service(GeckoDriverManager().install()))
    #mydriver = webdriver.Firefox(executable_path="C:/Users/Usuario/.wdm/drivers/geckodriver/win64/v0.36.0")

    #mydriver = webdriver.Firefox()
    
    #WebDriver mydriver = new GeckoDriver();

    driver.get("http://localhost:3000/login")

    #mydriver.getTitle()

    #title = mydriver.getTitle()

    #assert.assertEquals("React App", title)
    
    #submit = mydriver.findElement(By.cssSelector("button"))
    
    
    #element = WebDriverWait(driver, 10).until(
    #EC.presence_of_element_located((By.ID, "nombre_cargo")))

    username_input = driver.find_element(By.ID, "email")
    password_input = driver.find_element(By.ID, "password")
    submit_button = driver.find_element(By.ID, "Inicio")
    
    username_input.send_keys("Mario Bros2")
    password_input.send_keys("880000")
    submit_button.click()
    
        # Opcional: Verificar la API de FastAPI
    response = requests.post("http://127.0.0.1:8000/users_insert/", json={
  "NombreUsuario": "string",
  "ApellidodeUsuario": "string",
  "Tipoidentificación": "string",
  "Numeroidentificación": 0,
  "Estadodelusuario": "string",
  "Correodeusuario": "string",
  "Telefonodeusuario": 0
})
    #assert response.json()["status"] == "success"

    #assert response.status_code == 200
    #assert response.json() == {"cargo": "SecreTest", "Salario": "700000"}

    #submit.click()

    driver.quit()

    # responseTest = cargoRouter.post(  "/cityPark_crea_cargo/",
        # headers={"X-Token": "coneofsilence"},
        # json={"cargo": "SecreTest", "Salario": "700000"},
        # )

    

#getAIWriting(appTest)