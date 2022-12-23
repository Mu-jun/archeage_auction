from django.shortcuts import render
from rest_framework.views import APIView, Response, Request
from rest_framework.decorators import api_view
# from django

import requests
from bs4 import BeautifulSoup as bs
from codezip import urls

# Create your views here.
@api_view(["GET"])
def index(req):
    return render(req, "index.html")


@api_view(["GET"])
def search(req):
    print(req.GET)
    arche_res = requests.post(urls.archeage_auction_api_url, req.GET)
    # print("use reqests module =>\t", arche_res)
    data = arche_res.text
    soup = bs(data, "html.parser")
    img_list = soup.select('img')
    for _ in img_list:
        soup.img.decompose()
    a_list = soup.select('a')
    for _ in a_list:
        soup.a.decompose()
    print(soup)
    return render(req, "index.html", {"data":str(soup)})
