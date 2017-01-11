package com.txh.network.callback;

public interface IGenericsSerializator {
    <T> T transform(String response, Class<T> classOfT);
}
