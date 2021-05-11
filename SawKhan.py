import pip, json, os

def install(package):
    pip.main(['install', package])

try:
    from seleniumwire import webdriver
except ImportError:
    install('selenium-wire')
    from seleniumwire import webdriver
    os.environ['WDM_LOG_LEVEL'] = '0'

try:
    from webdriver_manager.chrome import ChromeDriverManager
except ImportError:
    install('webdriver-manager')
    from webdriver_manager.chrome import ChromeDriverManager
    os.environ['WDM_LOG_LEVEL'] = '0'

try:
    from colorama import init, Fore
except ImportError:
    install('colorama')
    from colorama import init, Fore

from os import system, name
from time import sleep

init(autoreset=True)

def clear():
    if name == 'nt':
        _ = system('cls')
    else:
        _ = system('clear')

clear()
print("\n\n\n\n\nWelcome to SawKhan!\n")
print(Fore.RED + "Made By: th-mas#0001\n")
print("""Usage: Use the browser to solve your Khan Academy problems. Simply enter/select any answer for a problem and submit.\n\nNotes:\nIt may seem like you got it wrong, but you did not :)\nAvoid submitting multiple times, when you have the option to move on / skip, do it!\n\n""")

os.environ['WDM_LOG_LEVEL'] = '0'
options = webdriver.ChromeOptions() 
options.add_experimental_option("excludeSwitches", ["enable-logging"])
driver = webdriver.Chrome(options=options, executable_path=ChromeDriverManager().install())

def interceptor(request):
    if request.method == 'POST' and "attemptProblem" in request.url:
        body = request.body.decode('utf-8')
        data = json.loads(body)
        data['variables']['input']['completed'] = True
        request.body = json.dumps(data).encode('utf-8')
        del request.headers['Content-Length']
        request.headers['Content-Length'] = str(len(request.body))

driver.request_interceptor = interceptor
driver.get('https://www.khanacademy.org/login')
input("Press Enter To Quit")
print("Quitting...")
driver.quit()