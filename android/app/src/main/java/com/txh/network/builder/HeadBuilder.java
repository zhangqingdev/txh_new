package com.txh.network.builder;

import com.txh.network.OkHttpUtils;
import com.txh.network.request.OtherRequest;
import com.txh.network.request.RequestCall;

/**
 * Created by zhy on 16/3/2.
 */
public class HeadBuilder extends GetBuilder
{
    @Override
    public RequestCall build()
    {
        return new OtherRequest(null, null, OkHttpUtils.METHOD.HEAD, url, tag, params, headers,id).build();
    }
}
