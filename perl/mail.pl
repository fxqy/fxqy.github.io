#!/usr/bin/perl -w
use strict;
use Net::SMTP;
use Authen::SASL;

##BEGIN {
##push (@INC,'/usr/share/perl5/vendor_perl/Net/ ');
##}

my $from = 'fxqyem@sohu.com';
my $to = 'cectdwf@126.com';
my $username = 'fxqyem@sohu.com';
my $passwd = 'GLDYJZQ132R';
my $subject = 'Test Email';
my $smtp = Net::SMTP->new('smtp.sohu.com');

$smtp->auth($username,$passwd) or die "Could not authenticate $!";
$smtp->mail($from);
$smtp->to($to);

$smtp->data();
$smtp->datasend("From:$from\n");
$smtp->datasend("To: $to\n");
#$smtp->datasend("Cc: $Cc/n");
$smtp->datasend("Subject: $subject\n");
$smtp->datasend("Headers: MIME-Version: 1.0\r\nContent-type: text/html\n");
$smtp->datasend("This is a test perl email, It is successfull");
$smtp->datasend("\n<a href='http://so.com'>搜索</a>");
$smtp->datasend("\n<img src='https://p3.ssl.qhimgs1.com/sdr/400__/t01c2c8eead9c6c516d.jpg'/>");
$smtp->dataend();

$smtp->quit;

print "Press any key to close...";
<STDIN>;