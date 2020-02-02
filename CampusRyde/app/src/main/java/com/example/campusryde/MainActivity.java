package com.example.campusryde;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

   public void signUp(View view)
    {
        Intent  newi = new Intent(this, SignUpActivity.class);
    this.startActivity(newi);
    }



    public void next( View view)
    {

        Intent intent = new Intent(this, MapsActivity2.class);
        this.startActivity(intent);


    }
}
