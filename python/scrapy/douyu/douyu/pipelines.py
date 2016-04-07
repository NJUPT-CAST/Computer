# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: http://doc.scrapy.org/en/latest/topics/item-pipeline.html


# class DouyuPipeline(object):
#     def process_item(self, item, spider):
#         return item


import json
import codecs
import sys

reload(sys)
sys.setdefaultencoding('utf8')

class JsonWritePipeline(object):
    def __init__(self):
        self.file = codecs.open('myItem.json', mode='wb', encoding='utf-8')

    def process_item(self, item, spider):
        line = "[" + json.dumps(dict(item), ensure_ascii=False) + "]\n"
        self.file.write(line)
        return item