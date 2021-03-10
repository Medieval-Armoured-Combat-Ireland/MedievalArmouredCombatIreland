1. Install python - assuming EC2 nano, basic ubuntu server  
   a. Install pip  
      `curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py`
      `python3 get-pip.py --force-reinstall`   
   b. Install libs  
   `python3 -m pip install -U discord.py`  
   `python3 -m pip install python-dotenv`  
   `python3 -m pip install flask`  
   `python3 -m pip install waitress`
   
2. Clone repo - note if 2fa is active will need personal access token  
   `git clone https://github.com/lukecaptaincode/MackTheMACIBot`
3. CD in dir and run  
   `python3 main.py`
    