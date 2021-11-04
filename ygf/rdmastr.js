
function get_rdm_mac(sep)
        local arra={"C","5","8","E","7","4","B","6","1","F","D","3","0","2","A","9"}
        local arrb={"C","0","6","2","E","8","4","A"}
        local mstr=""
        for var=0, 11 do
                local num
                local rarr
                if(1==var)
                then
                        num=8
                        rarr=arrb
                else
                        num=16
                        rarr=arra
                end
                local rdn = math.random(num)
                local rsep;
                if(var>0 and var%2==0)
                then
                        rsep = sep
                else
                        rsep = ""
                end
                mstr=mstr..rsep..rarr[rdn]
        end
        return mstr
end

function get_rdm_str(ln)
        local arra={"u","I","i","3","f","7","h","e","x","B","1","c","F","R","p","m","D","J","t","q","v","S","j","n","Q","Y","0","y","2","X","4","a","6","g","8","b","A","z","N","G","d","o","O","H","U","s","K","L","9","w","M","C","l","5","k","T","r","V","W","P","E","Z"}
        local mstr=""
        for var=0, ln-1 do
                local rdn = math.random(62)
                mstr=mstr..arra[rdn]
        end
        return mstr
end

function get_rdm_stra(ln)
        local arra={"u","I","i","f","h","e","x","B","c","F","R","p","m","D","J","t","q","v","S","j","n","Q","Y","y","X","a","g","b","A","z","N","G","d","o","O","H","U","s","K","L","w","M","C","l","k","T","r","V","W","P","E","Z"}
        local mstr=""
        for var=0, ln-1 do
                local rdn = math.random(52)
                mstr=mstr..arra[rdn]
        end
        return mstr
end

math.randomseed(tostring(os.time()):reverse():sub(1, 7))

if("mac" == arg[1])
then
        print(get_rdm_mac(arg[2]))
elseif("str" == arg[1])
then
        print(get_rdm_stra(arg[2])..get_rdm_str(arg[3]))
elseif("stra" == arg[1])
then
        local lrnm=math.random(arg[3])
        math.randomseed(tostring(os.time()):reverse():sub(1, 7))
        print(get_rdm_stra(arg[2])..get_rdm_str(lrnm))
else
        print(get_rdm_stra(arg[2]))
end


