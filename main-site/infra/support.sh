
# Test Nginx config
sudo nginx -t

# If you got error then just delete the log.txt file then
sudo nginx -s reload

# Status
sudo systemctl status nginx

# start
sudo systemctl start nginx

# Restart 
sudo systemctl restart nginx

# Stop 
sudo systemctl stop nginx

# Nginx Security 
sudo ufw app list

sudo ufw allow 'Nginx Full'



# Port verification 
sudo lsof -i TCP:80


#for SSH
# https://www.nginx.com/blog/using-free-ssltls-certificates-from-lets-encrypt-with-nginx/