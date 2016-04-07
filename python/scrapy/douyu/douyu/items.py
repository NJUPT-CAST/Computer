# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class DouyuItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    douyu_title = scrapy.Field()
    douyu_type = scrapy.Field()
    douyu_name = scrapy.Field()
    douyu_link = scrapy.Field()