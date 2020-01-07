#!/usr/bin/python3
 
import os
import pymysql
 
# open db connection
db = pymysql.connect("localhost","root","root","test" )
 
# get cursor
cursor = db.cursor()
 
# execute SQL 
cursor.execute("select mid,mname,mage,mphone from m_user")
 
# fetch first row
row = cursor.fetchone()

mid = row[0]
mname = row[1]
mage = row[2]
mphone = row[3]
print ("Database version : Id=%s   Name=%s  Age=%s  Phone=%s" % (mid,mname,mage,mphone))
 
# close db connection
db.close()

#Waiting to close
input("Press any key to close...")
