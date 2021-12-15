from PIL import Image
import numpy as np
from matplotlib import pyplot as plt
def check(p,q,limit):
	return np.sum((p-q)**2)<limit
limit = 200
d = set()
harvey = Image.open('harvey.png')
harvey = harvey.convert("RGBA")
harvey = np.array(harvey)
h, w, _ = harvey.shape

for i in range(h):
	for j in range(w):
		if np.sum(harvey[i,j,:3])<200:
			break
		d.add((i,j))
	for j in range(w-1,-1,-1):
		if np.sum(harvey[i,j,:3])<200:
			break
		d.add((i,j))
for j in range(w):
	for i in range(h):
		if np.sum(harvey[i,j,:3])<200:
			break
		d.add((i,j))
	for i in range(h-1,-1,-1):
		if np.sum(harvey[i,j,:3])<200:
			break
		d.add((i,j))

for i in range(198,215):
	for j in range(270,281):
		if check(harvey[i,j],[255,255,255,255],70000):
			d.add((i,j))
for i in range(218,228):
	for j in range(256,264):
		if check(harvey[i,j],[255,255,255,255],70000):
			d.add((i,j))
for i in range(223,238):
	for j in range(340,373):
		if check(harvey[i,j],[255,255,255,255],70000):
			d.add((i,j))
for i in range(87,108):
	for j in range(160,180):
		if check(harvey[i,j],[168,153,194,255],30000):
			d.add((i,j))
for i,j in d:
	harvey[i,j] = (0,0,0,0)
harvey = harvey[47:238,154:376]
harvey = Image.fromarray(harvey)
harvey.save("transHarvey.png")