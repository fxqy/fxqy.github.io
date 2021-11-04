#!/bin/sh

for i in 1 2 ;do
echo -e " \033[32m
  ------------------------------
  --- Welcome dwf 2021-11-15 ---
  ------------------------------
 \033[0m"

read -p "login: " root
if [ -z $root ]
then
        continue
fi
read -s -p "${root}'s password: " passwd

rootmd5=$(echo -n $root | md5sum | cut -c 3-30)
passwdmd5=$(echo -n $passwd | md5sum | cut -c 3-30)

if [ $rootmd5 == '2f95accc4314ea0f03e8dba358e7' -a $passwdmd5 == 'b7d94a64c9e20eaaab9fca45fc2a'
then
        exec /bin/ash --login
        echo 'dwf' > /proc/sys/kernel/hostname
else
        echo -e "\033[31m Login Failed \033[0m"
fi
done
