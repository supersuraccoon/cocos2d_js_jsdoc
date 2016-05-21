#! encoding=utf-8
import os
import shutil

if __name__ == '__main__':
	try:
		shutil.rmtree('./docs');
	except Exception, e:
		pass
	os.system('jsdoc -c ./conf.json -d ./docs -t ./template/docdash-master')