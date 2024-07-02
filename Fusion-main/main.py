from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

service = Service(executable_path="chromedriver.exe")
driver = webdriver.Chrome(service=service)

driver.get("http://127.0.0.1:5501/index.html")
time.sleep(2)
driver.get("http://127.0.0.1:5501/createacc.html")
driver.find_element(By.ID,'username').send_keys('abc')
time.sleep(2)
driver.find_element(By.ID,'email').send_keys('abc@gmail.com')
time.sleep(2)
driver.find_element(By.ID,'password').send_keys('abc')
time.sleep(2)
driver.find_element(By.ID,'confirmpassword').send_keys('abc')
time.sleep(2)
driver.find_element(By.ID,'submit').click()
time.sleep(2)
driver.get("http://127.0.0.1:5501/signin.html")
driver.find_element(By.ID,'username').send_keys('abc')
time.sleep(2)
driver.find_element(By.ID,'password').send_keys('abc')
time.sleep(2)
driver.find_element(By.ID,'submit').click()
time.sleep(2)
driver.get("http://127.0.0.1:5501/submit.html")

time.sleep(2)

driver.quit()