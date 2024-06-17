<!-- Git hub creating personal and work configs

 https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

a. ssh-keygen -t ed25519 -C "cvsatish.net@gmail.com"
b. step a prompts for a path always choose :  ~/.ssh/id_ed25519_<some name if first time dont give _name leave it> in our case we gave id_ed25519_personal.
c. And above command after giving successfully given path its asks for a pass phrase give any thing in this case we had given 12345678
d. after above steps now generated pub file we need to add using below command     ssh-add ~/.ssh/id_ed25519_personale. after creation copy the certificate using below command  
      cat ~/.ssh/id_ed25519_personal.pub | pbcopyf.  AFter that the copied ssh key ned to enter in the gihub go to github->topRight->dropdown->settings->SSH Key and GPG Keys -> Add New Key -> copy your key and save
g. After that please go to your config file in path ~/.SSH/CONFIG, create a domain for your personal and give the path to the .pub file in ~/.ssh/.id_ed25519.pub file
Host github.com
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_ed25519_personal

h. test the ssh connecting from your terminal like below    ssh -T git@github.com

vi ~/.ssh/config

to see configs in laptop vi ~/.ssh/config:
it gives list of ssh configs as below,
Host github.intuit.com
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_ed25519


Created a new personal  config:
Host github.com
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_ed25519_personal -->


# LeetCode
Solving LeetCode problems Via Javascript
