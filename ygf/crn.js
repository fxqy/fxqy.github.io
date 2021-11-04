#!/bin/ash

dth=`date '+%k'`
if [ '0' == $dth ]
then
        echo "----------crn start----------" > /tmp/crn-run.log
        echo 'dwf' > /proc/sys/kernel/hostname
else
        echo "----------crn----------" >> /tmp/crn-run.log
fi

/root/rdmac.sh


