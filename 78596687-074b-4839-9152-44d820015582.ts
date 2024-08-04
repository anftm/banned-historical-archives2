export default {
  "entity": {
    "id": "78596687-074b-4839-9152-44d820015582",
    "name": "红旗一九六六年第十期",
    "internal": false,
    "official": true,
    "type": "pdf",
    "author": "《红旗》杂志编辑部",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/78596687-074b-4839-9152-44d820015582.pdf"
    ]
  },
  "parser_option": {
    "page_limits": [],
    "ext": "pdf",
    "articles": [
      {
        "title": "中国共产党中央委员会关于无产阶级文化大革命的决定",
        "authors": [],
        "page_start": 3,
        "page_end": 10,
        "dates": [
          {
            "year": 1966,
            "month": 8,
            "day": 8
          }
        ]
      },
      {
        "title": "无产阶级文化大革命的纲领性文件",
        "authors": [],
        "page_start": 11,
        "page_end": 14,
        "dates": [
          {
            "year": 1966
          }
        ],
        "ocr": {
          "det_limit_side_len": 1496,
          "det_db_box_thresh": 0.3,
          "rec_model_dir": "./paddle/ch_ppocr_mobile_v2.0_rec_infer",
          "det_model_dir": "./paddle/ch_PP-OCRv3_det_infer",
          "drop_score": 0.3
        }
      },
      {
        "title": "大搞学习毛主席著作的群众运动，加速农民思想的无产阶级革命化——广东农村开展学习毛主席著作的群众运动的基本情况和经验",
        "authors": [
          "赵紫阳"
        ],
        "page_start": 15,
        "page_end": 26,
        "dates": [
          {
            "year": 1966
          }
        ]
      },
      {
        "title": "评孙冶方反动的政治立场和经济纲领",
        "authors": [
          "晓林",
          "梦奎"
        ],
        "page_start": 27,
        "page_end": 38,
        "ocr": {
          "auto_vsplit": false,
          "vsplit": 0.41
        },
        "dates": [
          {
            "year": 1966
          }
        ]
      },
      {
        "title": "坚决铲除侯外庐论汤显祖剧作的三株大毒草",
        "authors": [
          "唐宇元",
          "孟祥才",
          "王恩宇"
        ],
        "page_start": 39,
        "page_end": 50,
        "ocr": {
          "auto_vsplit": false,
          "vsplit": 0.41
        },
        "dates": [
          {
            "year": 1966
          }
        ]
      }
    ],
    "ocr": {
      "content_thresholds": [
        0,
        0.17,
        0,
        0.2
      ]
    },
    "ocr_exceptions": {}
  },
  "parser_id": "automation",
  "path": "78596687-074b-4839-9152-44d820015582.pdf",
  "resource_type": "book",
  "version": 2
};