<?php

namespace App\Support\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

/**
 * Trait UsesUuid
 * @package App\Support\Model
 */
trait UsesUuid
{

    protected static function bootUsesUuid()
    {
        static::creating(function ($model) {
            /** @var Model $model */
            if (!$model->getKey()) {
                $model->{$model->getKeyName()} = (string)Str::uuid();
            }
        });
    }

    public function getIncrementing()
    {
        return false;
    }

    public function getKeyType()
    {
        return 'string';
    }
}
