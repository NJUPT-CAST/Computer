import scrapy

from douyu.items import DouyuItem

class DouyuSpider(scrapy.Spider):
    name = "douyu"
    allowed_domains = ["www.douyu.com"]
    start_urls = [
        "http://www.douyu.com/directory/all"
    ]

    def parse(self, response):
        for sel in response.xpath('//ul[@id="live-new-show-content-box"]/li'):
            item = DouyuItem()
            item['douyu_title'] = sel.xpath('a/@title').extract()
            item['douyu_type'] = sel.xpath('a/div/div/span/text()').extract()
            item['douyu_name'] = sel.xpath('a/div/p/span/text()').extract()
            item['douyu_link'] = sel.xpath('a/@href').extract()
            yield item
