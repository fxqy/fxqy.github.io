from wsgiref.simple_server import make_server

def webapplication(env,resp):
    resp('200 OK',[('Content-Type', 'text/html')])
    return [b'<h1>hello world!First python serverPage</h1>']
    
httpd = make_server('',9999,webapplication)
print('Serving Http on port 9999')

httpd.serve_forever()